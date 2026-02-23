class StateMachine {
  constructor() {
    this.state = "logged_out";
    this.render();
    this.log("初期状態: logged_out");
  }

  transition(newState) {
    this.log(`状態変更: ${this.state} → ${newState}`);
    this.state = newState;
    this.render();
  }

  login() {
    if (this.state === "logged_out") {
      this.transition("logged_in");
    }
  }

  logout() {
    if (this.state === "logged_in") {
      this.transition("logged_out");
    }
  }

  error() {
    this.transition("error");
  }

  render() {
    const stateBox = document.getElementById("stateBox");
    const stateText = document.getElementById("currentState");

    stateText.textContent = this.state;

    stateBox.className = "state";

    if (this.state === "logged_in") {
      stateBox.classList.add("state--logged_in");
    }

    if (this.state === "error") {
      stateBox.classList.add("state--error");
    }
  }

  log(message) {
    const logList = document.getElementById("logList");
    const li = document.createElement("li");
    li.textContent = message;
    logList.prepend(li);
  }
}

const machine = new StateMachine();

document.getElementById("loginBtn")
  .addEventListener("click", () => machine.login());

document.getElementById("logoutBtn")
  .addEventListener("click", () => machine.logout());

document.getElementById("errorBtn")
  .addEventListener("click", () => machine.error());

document.getElementById("themeToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("theme--dark");
  });