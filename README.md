# expressr

[expressr on Heroku](https://expressr.herokuapp.com/)

expressr is a full stack web application built with Ruby on Rails, React and Redux, and uses a PostgreSQL database. expressr was influenced by the social networking site Tumblr, and draws inspiration from social media sites that focus on user content. expressr features a minimal, distraction-free design, allowing users to focus on posts shared by others. Users can post their self expressions by text, or photo. Users can also follow other users, and like their posts.

## Features and Implementation

### Posts

Users can upload images or write out their thoughts to be seen by their followers. expressr was inspired by minimally-designed websites such as Instagram, and Digg, where visual content is the main focus.

![](https://raw.githubusercontent.com/pedropreciado/expressr/master/docs/screenshots/fallpup.png)

Using the `react-modal` library, users can post content using a form that won't redirect from the page. Images are uploaded and retrieved from the cloud-based image management service, Cloudinary.

![](https://raw.githubusercontent.com/pedropreciado/expressr/master/docs/screenshots/form.png)

### Discover

![](https://raw.githubusercontent.com/pedropreciado/expressr/master/docs/screenshots/discover.png)

The Discover page allows users to explore other users' posts on expressr. Users are displayed randomly, along with one of their posts.
