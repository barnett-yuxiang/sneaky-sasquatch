class Obstacle {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = 50;
        // 为火堆添加动画效果
        this.fireFrame = 0;
    }

    draw(ctx) {
        switch(this.type) {
            case 'tree':
                this.drawTree(ctx);
                break;
            case 'tent':
                this.drawTent(ctx);
                break;
            case 'campfire':
                this.drawCampfire(ctx);
                break;
            case 'food':
                this.drawFood(ctx);
                break;
        }
    }

    drawTree(ctx) {
        // 树干
        ctx.fillStyle = '#8B4513';  // 棕色
        ctx.fillRect(this.x + 20, this.y + 30, 10, 20);
        
        // 树叶
        ctx.fillStyle = '#228B22';  // 森林绿
        ctx.beginPath();
        ctx.moveTo(this.x + 25, this.y);
        ctx.lineTo(this.x + 45, this.y + 35);
        ctx.lineTo(this.x + 5, this.y + 35);
        ctx.closePath();
        ctx.fill();
    }

    drawTent(ctx) {
        // 帐篷主体
        ctx.fillStyle = '#F4A460';  // 沙褐色
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y + 45);
        ctx.lineTo(this.x + 25, this.y + 5);
        ctx.lineTo(this.x + 45, this.y + 45);
        ctx.closePath();
        ctx.fill();

        // 帐篷入口
        ctx.fillStyle = '#8B4513';  // 深棕色
        ctx.beginPath();
        ctx.moveTo(this.x + 20, this.y + 45);
        ctx.lineTo(this.x + 25, this.y + 25);
        ctx.lineTo(this.x + 30, this.y + 45);
        ctx.closePath();
        ctx.fill();
    }

    drawCampfire(ctx) {
        // 木柴
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(this.x + 15, this.y + 35, 20, 4);
        ctx.fillRect(this.x + 22, this.y + 30, 4, 15);

        // 火焰 - 使用动画帧来改变大小
        this.fireFrame = (this.fireFrame + 0.1) % 2;
        const flameHeight = 20 + Math.sin(this.fireFrame * Math.PI) * 5;
        
        // 外层火焰
        ctx.fillStyle = '#FF4500';
        ctx.beginPath();
        ctx.moveTo(this.x + 15, this.y + 30);
        ctx.lineTo(this.x + 25, this.y + 30 - flameHeight);
        ctx.lineTo(this.x + 35, this.y + 30);
        ctx.closePath();
        ctx.fill();

        // 内层火焰
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(this.x + 20, this.y + 30);
        ctx.lineTo(this.x + 25, this.y + 35 - flameHeight);
        ctx.lineTo(this.x + 30, this.y + 30);
        ctx.closePath();
        ctx.fill();
    }

    drawFood(ctx) {
        // 随机选择食物类型（苹果或面包）
        if (!this.foodType) {
            this.foodType = Math.random() < 0.5 ? 'apple' : 'bread';
        }

        if (this.foodType === 'apple') {
            // 苹果
            ctx.fillStyle = '#FF0000';
            ctx.beginPath();
            ctx.arc(this.x + 25, this.y + 25, 10, 0, Math.PI * 2);
            ctx.fill();

            // 苹果茎
            ctx.fillStyle = '#654321';
            ctx.fillRect(this.x + 24, this.y + 15, 2, 5);

            // 苹果叶
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.ellipse(this.x + 28, this.y + 15, 4, 2, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // 面包
            ctx.fillStyle = '#DEB887';
            ctx.beginPath();
            ctx.ellipse(this.x + 25, this.y + 25, 15, 8, 0, 0, Math.PI * 2);
            ctx.fill();

            // 面包纹理
            ctx.strokeStyle = '#BC8F8F';
            ctx.beginPath();
            ctx.moveTo(this.x + 15, this.y + 25);
            ctx.lineTo(this.x + 35, this.y + 25);
            ctx.stroke();
        }
    }
}