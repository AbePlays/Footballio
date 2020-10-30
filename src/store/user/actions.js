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
    var date = new Date();

    if (payload.chosenPlan === 2) {
      date.setFullYear(date.getFullYear() + 1);
    } else if (payload.chosenPlan === 3) {
      date.setMonth(date.getMonth() + 6);
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
          date:
            date.getDate() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getFullYear(),
        }),
      }
    );

    context.commit("setUser", {
      localId: data.localId,
    });
  },
  async signin(context, payload) {
    const req = await fetch(
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
    const data = await req.json();
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
