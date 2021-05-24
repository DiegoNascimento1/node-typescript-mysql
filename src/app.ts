import express, { Application } from "express";

export class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    async listen() {
        await this.app.listen(this.port);
        console.log(`Server on port ${this.port}`);
    }
}