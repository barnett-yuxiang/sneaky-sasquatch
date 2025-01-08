class Game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 600;
        document.body.appendChild(this.canvas);
        
        this.player = new Player(400, 300);
        this.obstacles = [];
        this.setupGame();
        this.setupControls();
        this.gameLoop();
    }

    setupGame() {
        // 添加更多的树和帐篷，创造更丰富的场景
        this.obstacles.push(
            new Obstacle(100, 100, 'tree'),
            new Obstacle(300, 200, 'tent'),
            new Obstacle(500, 150, 'tree'),
            new Obstacle(150, 400, 'tree'),
            new Obstacle(600, 300, 'tent'),
            new Obstacle(400, 100, 'tree'),
            // 添加火堆
            new Obstacle(200, 250, 'campfire'),
            new Obstacle(500, 400, 'campfire'),
            // 添加食物
            new Obstacle(350, 150, 'food'),
            new Obstacle(450, 300, 'food')
        );
    }

    setupControls() {
        window.addEventListener('keydown', (e) => {
            // 阻止方向键的默认滚动行为
            if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            let moveSpeed = 5;
            switch(e.key) {
                case 'ArrowUp':
                    this.player.move(0, -moveSpeed);
                    break;
                case 'ArrowDown':
                    this.player.move(0, moveSpeed);
                    break;
                case 'ArrowLeft':
                    this.player.move(-moveSpeed, 0);
                    break;
                case 'ArrowRight':
                    this.player.move(moveSpeed, 0);
                    break;
            }
        });
    }

    gameLoop() {
        // 清除画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制草地背景
        this.ctx.fillStyle = '#90EE90';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 添加一些随机的小草点缀
        this.drawGrass();
        
        // 绘制障碍物
        this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));
        
        // 绘制玩家
        this.player.draw(this.ctx);
        
        requestAnimationFrame(() => this.gameLoop());
    }

    drawGrass() {
        // 画一些小草点缀背景
        this.ctx.fillStyle = '#228B22';
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * this.canvas.width;
            let y = Math.random() * this.canvas.height;
            this.ctx.fillRect(x, y, 3, 5);
        }
    }
}