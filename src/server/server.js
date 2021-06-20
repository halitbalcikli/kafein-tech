import {createServer, Model} from "miragejs";

createServer({
    models: {
        todo: Model
    },

    seeds(server) {
        server.create("todo", {text: "First todo item", isComplete: false})
    },

    routes() {
        this.namespace = "api"

        this.get("/todos", (schema, request) => {
            return schema.todos.all()
        });

        this.delete("/todos/:id", (schema, request) => {
            let id = request.params.id;

            return schema.todos.find(id).destroy()
        });

        this.post("/todos", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)

            return schema.todos.create(attrs)
        });

    },
})
