import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qna">
      <h2>Question & Answer</h2>
      <hr />
      <h4>Question 1: What is Context API?</h4>
      <p>
        Answer: Context API is a React structure that allow us to interchange
        unique details and helps to resolve prop drilling from all levels of our
        application. Context API is a method for a React app to successfully
        produce global variables that can be passed all over. This is the
        another way to prop drilling or moving props from grandparent to child
        to parent and so on. Context API is an easier, simple method to state
        management. Context API is a new feature added in version 16.3 of React
        that let one to share state across the entire app or part of it simply
        and easily. Context API returns a consumer and a provider. Provider is a
        component that provides the state to its children. It will hold the
        store and be the parent of all the components that might need that
        store. Consumer is a component that consumes and uses the state.
      </p>
      <h4>Question 2: What are semantic tags?</h4>
      <p>
        Answer: Elements such as "header", "footer" and "article" etc. are all
        called semantic tags because they actually tell the motive of the
        element and the type of content that's within them. HTML was mainly
        constructed as a markup language to narrate documents on the early
        internet. As the internet grew and was adopted by so more people, it's
        needs to be changed. Elements such as "header", "nav", "section",
        "article", "aside", and "footer" function more or less like "div"
        element. They group other elements together into page sections. However
        where a "div" tag could hold any type of info, it's easy to recognize
        what sort of info would go in a semantic "header" section. The semantic
        elements added in HTML5 are: "article", "aside", "details",
        "figcaption", "figure", "footer", "header", "main", "mark", "nav",
        "section", "summary", "time" etc.
      </p>
      <h4>Question 2: Difference between Inline vs Inline-Block vs Block?</h4>
      <p>
        Answer:
        <br /> <b>Inline:</b> The element doesn't start on a new line and only
        occupy just the width it requires. Can not set the width or height
        value. <br />
        <b>Inline-Block:</b> It's layout just like the inline element where it
        doesn't start on a new line. But can set width and height value.
        <br />
        <b>Block:</b> The element will start on a new line and occupy the full
        width available. Can set width and height value.
      </p>
    </div>
  );
};

export default Blogs;