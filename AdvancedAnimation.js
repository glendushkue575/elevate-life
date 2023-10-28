/*
File Name: AdvancedAnimation.js
Content: A complex and sophisticated animation code that creates a mesmerizing spiral pattern using HTML5 Canvas and JavaScript.
*/

// Define canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set colors
const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#4CD964", "#5AC8FA", "#007AFF", "#5856D6", "#FF2D55"];

// Set background color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create spiral object
const spiral = {
  centerX: canvas.width / 2,
  centerY: canvas.height / 2,
  radius: 10,
  angleOffset: 0,
  angleIncrement: 0.02,
  lineWidth: 2,
  colorIndex: 0,
  
  // Draw the spiral
  draw: function() {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = colors[this.colorIndex];
    
    for (let angle = 0; angle < Math.PI * 8; angle += 0.02) {
      const x = this.centerX + (this.radius + angle * 20) * Math.cos(angle + this.angleOffset);
      const y = this.centerY + (this.radius + angle * 20) * Math.sin(angle + this.angleOffset);
      
      if (angle === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
    ctx.closePath();
  },
  
  // Update properties
  update: function() {
    this.radius += 0.05;
    this.angleOffset += this.angleIncrement;
    this.lineWidth += 0.01;
    this.colorIndex = (this.colorIndex + 1) % colors.length;
    
    if (this.lineWidth > 8) {
      this.lineWidth = 2;
      this.radius = 10;
      this.angleOffset = 0;
    }
  }
};

// Animation loop
function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  spiral.update();
  spiral.draw();

  requestAnimationFrame(animate);
}

// Start the animation loop
animate();