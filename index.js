const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");
const { parse } = require("dotenv");


app.use(cors(   {
    origin: 'https://chess-club-frontend-lime.vercel.app/#/Events',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
}));
app.use(express.json());

//EVENTS BACKEND: General, Search Sort, Single ITEM
app.get("/events", async(req, res)=>{
    try {
        const products = await pool.query("SELECT * FROM events")
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})
app.get("/events/search/:string", async(req, res)=>{
    
    const searchString = `%${req.params.string}%`;
    try {
        const products = await pool.query("SELECT * FROM events WHERE event_name ILIKE $1 LIMIT 6",[searchString])
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/events/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    try {
        const products = await pool.query("SELECT * FROM events WHERE id=$1",[id])
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})


//STUDENT AND TEACHER REPRESENTATIVE
app.get("/studentOfficials", async(req, res)=>{
    try {
        const products = await pool.query("SELECT * FROM student_officials")
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})
app.get("/teacherOfficials", async(req, res)=>{
    try {
        const products = await pool.query("SELECT * FROM teacher_officials")
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})



//VIDEOS: General, Search and Individual
app.get("/videos", async(req, res)=>{
    try {
        const products = await pool.query("SELECT * FROM video_content")
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})
app.get("/videos/search/:string", async(req, res)=>{
    
    const searchString = `%${req.params.string}%`;
    try {
        const products = await pool.query("SELECT * FROM video_content WHERE video_title ILIKE $1 LIMIT 6",[searchString])
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/videos/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    try {
        const products = await pool.query("SELECT * FROM video_content WHERE id=$1",[id])
        console.log(products.rows)
        res.setHeader('Cache-Control', 'no-store'); // Vercel-specific cache control
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})
app.listen(5000,()=>{
    console.log(`server has started on port 5000 `);
})