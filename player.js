class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 60;
        this.color = '#4A4A4A';  // 深灰色
    }

    draw(ctx) {
        // 画身体
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 10, this.y + 20, 20, 30);  // 身体
        
        // 画头
        ctx.fillRect(this.x + 8, this.y + 5, 24, 20);    // 头部
        
        // 画腿
        ctx.fillRect(this.x + 10, this.y + 50, 8, 10);   // 左腿
        ctx.fillRect(this.x + 22, this.y + 50, 8, 10);   // 右腿
        
        // 画手臂
        ctx.fillRect(this.x + 5, this.y + 25, 5, 15);    // 左手
        ctx.fillRect(this.x + 30, this.y + 25, 5, 15);   // 右手

        // 添加眼睛
        ctx.fillStyle = 'white';  // 眼睛底色
        ctx.fillRect(this.x + 12, this.y + 12, 6, 6);    // 左眼
        ctx.fillRect(this.x + 22, this.y + 12, 6, 6);    // 右眼
        
        ctx.fillStyle = 'black';  // 眼球
        ctx.fillRect(this.x + 14, this.y + 14, 2, 2);    // 左眼球
        ctx.fillRect(this.x + 24, this.y + 14, 2, 2);    // 右眼球
        
        // 添加嘴巴
        ctx.fillStyle = '#FF6B6B';  // 嘴巴颜色
        ctx.fillRect(this.x + 16, this.y + 20, 8, 2);    // 嘴巴
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}