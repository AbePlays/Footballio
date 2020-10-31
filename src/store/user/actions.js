export default {
  async signup(context, payload) {
    var req = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    var data = await req.json();
    if (!req.ok) {
      alert("Failed to Authenticate");
      const error = new Error(data.message || "Failed to Authenticate!");
      throw error;
    }
    var date = new Date();

    if (payload.chosenPlan === 2) {
      date.setFullYear(date.getFullYear() + 1);
    } else if (payload.chosenPlan === 3) {
      date.setMonth(date.getMonth() + 1);
    } else {
      date.setDate(date.getDate() + 30);
    }

    await fetch(
      `https://footballio.firebaseio.com/users/${data.localId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          email: payload.email,
          name: payload.name,
          date,
        }),
      }
    );

    context.commit("setUser", {
      localId: data.localId,
    });
  },
  async signin(context, payload) {
    var req = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    var data = await req.json();

    var userId = data.localId;

    if (!req.ok) {
      alert("Failed to Authenticate");
      const error = new Error(data.message || "Failed to Authenticate!");
      throw error;
    }

    req = await fetch(`https://footballio.firebaseio.com/users.json`);
    data = await req.json();

    var date = "";
    for (const key in data) {
      if (key === userId) {
        date = data[key].date;
        break;
      }
    }

    date = new Date(date);
    const currentDate = new Date();
    console.log(date.getTime() > currentDate.getTime());

    context.commit("setUser", {
      localId: data.localId,
    });
  },
  signOut(context) {
    context.commit("setUser", {
      localId: null,
    });
  },
};
