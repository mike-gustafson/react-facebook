import { useState } from "react";
import React from "react";
import VideoPost from "./components/VideoPost";
import style from "../../../styles/Video.module.css";

let initialReactTutorialVideos = [
    { title: "Getting Started with React: A Beginner's Guide", description: "In this video, we will explore the basics of React, covering concepts such as components, JSX, and state. By the end, you'll have a solid foundation to build upon.", videoUrl: "https://www.youtube.com/watch?v=sBws8MSXN7A" },
    { title: "Understanding React Components and Props", description: "Learn how to create reusable components in React and pass data between them using props. This video dives into the core building blocks of a React application.", videoUrl: "https://www.youtube.com/watch?v=Jh_uGNhjt3Q" },
    { title: "State Management in React: A Comprehensive Overview", description: "Delve into the intricacies of state management in React. We'll discuss local state, lifting state up, and using state effectively to build dynamic and interactive UIs.", videoUrl: "https://www.youtube.com/watch?v=0NlYve4O2Mg" },
    { title: "Handling Forms in React: Controlled Components", description: "Explore the best practices for handling forms in React. We'll cover controlled components, form validation, and how to manage form data efficiently.", videoUrl: "https://www.youtube.com/watch?v=dXQPLjAEnIE" },
    { title: "Routing in React: Navigating Your Single Page Application", description: "Take a deep dive into React Router and learn how to implement client-side routing in your single-page applications. Navigation made easy!", videoUrl: "https://www.youtube.com/watch?v=Law7wfdg_ls" },
    { title: "Working with APIs in React: Fetching and Displaying Data", description: "Discover how to fetch data from APIs and integrate it into your React application. This tutorial will guide you through making asynchronous requests and updating the UI accordingly.", videoUrl: "https://www.youtube.com/watch?v=ed8SzALpx1Q" },
    { title: "Styling in React: CSS-in-JS and Other Approaches", description: "Explore different styling approaches in React, from traditional CSS to modern solutions like styled-components. Find the best method for your project and enhance the visual appeal of your components.", videoUrl: "https://www.youtube.com/watch?v=ed8SzALpx1Q" },
    { title: "Stateful vs. Stateless Components in React", description: "Distinguish between stateful and stateless components in React. Understand when to use each type and how they contribute to building scalable and maintainable applications.", videoUrl: "https://www.youtube.com/watch?v=rtfZ6GZR-Zk" },
    { title: "Testing React Applications: A Comprehensive Guide", description: "Ensure the reliability of your React application by mastering the art of testing. From unit tests to end-to-end testing, this tutorial covers the tools and techniques you need to know.", videoUrl: "https://www.youtube.com/watch?v=3e1GHCA3GP0" },
    { title: "Optimizing React Performance: Best Practices and Tips", description: "Learn how to optimize the performance of your React applications. This tutorial covers techniques such as memoization, code splitting, and lazy loading to ensure a smooth user experience.", videoUrl: "https://www.youtube.com/watch?v=5OuiI6Jm5ZE" },
  ];
  

  function Feed() {
    const [reactTutorialVideos, setReactTutorialVideos] = useState(initialReactTutorialVideos);
  
    const videosArray = reactTutorialVideos.map((video, idx) => (
      <VideoPost
        key={idx}
        title={video.title}
        description={video.description}
        timestamp={new Date().toLocaleString()}
        author="John Doe"
        likes={Math.floor(Math.random() * 100)}
        comments={Math.floor(Math.random() * 50)}
        shares={Math.floor(Math.random() * 20)}
        videoUrl={video.videoUrl}
        className={style.Post}
      />
    ));
  
    return (
      <div>
        {videosArray}
      </div>
    );
  }

export default function Newsfeed() {
  return (
    <div className={style.FeedContainer}>
      <Feed />
    </div>
  );
}