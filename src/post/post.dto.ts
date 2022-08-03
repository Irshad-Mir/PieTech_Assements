export class CreatePostDto {
    userId:number;
    title:string;
    body:string;
    constructor(userId: number, title: string, body: string){
        this.userId=userId;
        this.title=title;
        this.body=body;
    }
    
    }
    