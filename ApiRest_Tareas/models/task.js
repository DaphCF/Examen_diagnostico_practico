class Task {
    constructor(id, title, description, completed=false, createdAd = new Date()){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAd = createdAd;
    }
}

module.exports = Task;