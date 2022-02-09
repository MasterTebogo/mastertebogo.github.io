.rotate-by-deg {
  transform: rotate(45deg);
}

.element {
  transform: scaleX();
  transform: scaleY();
  transform: scale();
}

.element {
  transform: skewX();
  transform: skewY();
  transform: skew();
}

.element {
  transform: translateX();
  transform: translateY();
  transform: translate();
}

.element {
  transform: perspective();
}

.element {
  transform: rotateX();
  transform: rotateY();
  transform: rotateZ();
  transform: rotate3d();
}

.element {
  transform: scaleZ();
  transform: scale3d();
}

.element {
  transform: translateZ();
  transform: translate3d();
}

.element {
  transform: matrix();
  transform: matrix3d();
}


#transition-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

button {
  border: 1px solid black;
  border-radius: 5px;
  padding: 2% 5% 2% 5%;
  background-color: white;
  color: white;
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  transition-delay: 0.25s;
}

button:hover {
  background-color: black;
  cursor: pointer;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#ball {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: red;
  animation: 2s change-color infinite alternate;
}

@keyframes change-color {
  from {
    background-color: red;
  }
  
  50% {
    width: 200px;
    height: 200px;  
    background-color: blue;
  }

  to {
    background-color: green;
  }
}

