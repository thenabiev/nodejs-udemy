const express=require('express');

const app=express();
const path=require("path");

app.use("/libs",
    express.static(
        path.join(__dirname, "node_modules")
));
app.use("/static", 
    express.static(
        path.join(
            __dirname, "public"
        )
    ))

app.use("/blogs/:blogId", function(request, response){
    // console.log(__dirname);
    // console.log(__filename);

    // C:\Users\ASUS\Desktop\Node.js S.T\02 Express\BlogsApp/views/users

    response.sendFile(
        path.join(
            __dirname, "views/users", "blog-details.html"
        )
    )
})
app.use("/blogs", function(request, response){
    response.sendFile(
        path.join(
            __dirname, "views/users", "blogs.html"
        )
    )
})
app.use("/",function(request, response){
    response.sendFile(
        path.join(
            __dirname, "views/users", "index.html"
        )
    )
});

app.listen(3001, function(){
    console.log("Server is working on port 3001");
})