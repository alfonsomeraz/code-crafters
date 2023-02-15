import mongoose from 'mongoose';
import Blog from '.model/Blog';

mongoose.connect("mongodb+srv://ashKittur:8KCwteOgxFsWPcGQ@cluster0.u5jjh5r.mongodb.net/test")

// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  // Insert the article in our MongoDB database
  await article.save();