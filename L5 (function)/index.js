//TODO>> Say hello system
function sayHello() {
  let userName = prompt("Enter your name...");
  document.writeln("Hello ", userName);
}

//TODO>> Fan system
{
  let fanStatus = false;
  let fanSpeed = 0;

  function openFan() {
    fanStatus = true;
    fanSpeed = 1;
    console.log("Fan is open and Fan Speed is : 1");
  }

  function closeFan() {
    fanStatus = false;
    fanSpeed = 0;
    console.log("Fan is closed...");
  }

  function toggleFan() {
    if (fanStatus) {
      closeFan();
    } else {
      openFan();
    }
  }

  function increaseSpeed() {
    if (fanStatus && fanSpeed < 5) {
      console.log("Fan speed is", ++fanSpeed);
    }
  }

  function decreaseSpeed() {
    if (fanStatus && fanSpeed > 1) {
      console.log("Fan speed is", --fanSpeed);
    }
  }
}

//TODO>> Old Fan system
{
  let fanStatus = false;
  let fanSpeed = 0;

  function fanOperator() {
    if (!fanStatus) {
      fanStatus = true;
      console.log("Fan is open and fan speed is :", ++fanSpeed);
    } else if (fanSpeed < 3) {
      console.log("Fan speed is :", ++fanSpeed);
    } else {
      fanStatus = false;
      fanSpeed = 0;
      console.log("Fan is closed");
    }
  }
}

//TODO Get average
{
  function getAvg(n1, n2) {
    return (n1 + n2) / 2;
  }
  getAvg(10, 15);
}
