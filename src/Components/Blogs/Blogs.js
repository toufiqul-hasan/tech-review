import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="qna">
      <h2>Question & Answer</h2>
      <hr />
      <h4>Question 1: What is Context API?</h4>
      <p>
        Answer: Context API is a React structure that empowers us to trade
        unique details and helps with tackling prop drilling from all levels of
        our application. Context API is a way for a React app to effectively
        produce global variables that can be passed around. This is the
        alternative to prop drilling or moving props from grandparent to child
        to parent and so on. Context API is an easier, lighter approach to state
        management. Context API is a new feature added in version 16.3 of React
        that allows one to share state across the entire app or part of it
        lightly and easily. Context API returns a consumer and a provider.
        Provider is a component that provides the state to its children. It will
        hold the store and be the parent of all the components that might need
        that store. Consumer is a component that consumes and uses the state.
      </p>
      <h4>Question 2: What are semantic tags?</h4>
      <p>
        Answer: Elements such as "header", "footer" and "article" are all
        considered semantic because they accurately describe the purpose of the
        element and the type of content that is inside them. HTML was originally
        created as a markup language to describe documents on the early
        internet. As the internet grew and was adopted by more people, its needs
        to be changed. Elements such as "header", "nav", "section", "article",
        "aside", and "footer" act more or less like "div" elements. They group
        other elements together into page sections. However where a "div" tag
        could contain any type of information, it is easy to identify what sort
        of information would go in a semantic "header" region. The semantic
        elements added in HTML5 are: "article", "aside", "details",
        "figcaption", "figure", "footer", "header", "main", "mark", "nav",
        "section", "summary", "time".
      </p>
      <h4>Question 2: Difference between Inline vs Inline-Block vs Block?</h4>
      <p>
        Answer:
        <br /> <b>Inline:</b> The element doesn't start on a new line and only
        occupy just the width it requires. Can't set the width or height. <br />
        <b>Inline-Block:</b> It's formatted just like the inline element where
        it doesn't start on a new line. But can set width and height values.{" "}
        <br />
        <b>Block:</b> The element will start on a new line and occupy the full
        width available and can set width and height values.
      </p>
    </div>
  );
};

export default Blogs;