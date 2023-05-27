let currentScene = 1;

function hideScene(sceneId) {
  const sceneElement = document.getElementById(sceneId);
  sceneElement.style.display = 'none';
}

function showScene(sceneId) {
  const sceneElement = document.getElementById(sceneId);
  sceneElement.style.display = 'block';
}

function nextScene() {
  const currentSceneElement = document.getElementById(`scene${currentScene}`);
  hideScene(`scene${currentScene}`);
  
  currentScene++;
  
  const nextSceneElement = document.getElementById(`scene${currentScene}`);
  showScene(`scene${currentScene}`);
}

function goLeft() {
  const currentSceneElement = document.getElementById(`scene${currentScene}`);
  hideScene(`scene${currentScene}`);
  
  currentScene = 4;
  
  const nextSceneElement = document.getElementById(`scene${currentScene}`);
  showScene(`scene${currentScene}`);
}

function goRight() {
  const currentSceneElement = document.getElementById(`scene${currentScene}`);
  hideScene(`scene${currentScene}`);
  
  currentScene++;
  
  const nextSceneElement = document.getElementById(`scene${currentScene}`);
  showScene(`scene${currentScene}`);
}

// Skryjeme všechny scény kromě první
for (let i = 2; i <= 4; i++) {
  hideScene(`scene${i}`);
}
