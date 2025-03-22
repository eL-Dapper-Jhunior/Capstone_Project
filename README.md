  


# 🎵 Elisa's Music Player  

Welcome to **Elisa's Music Player**, a web-based music application designed to help users discover and play their favorite tracks! This app provides real-time music search, playback controls, and dynamic content like top charts, artists, and genres.  

## 🚀 Features  
- **Landing Page**: A welcoming home page with a “Try for Free” button that navigates users to the dashboard.  
- **Dashboard**: Displays top charts, artists, and genres in an attractive grid layout. Includes music thumbnails and a mini music player at the bottom.  
- **Search Functionality**:  
  - Search for tracks using the search bar in the header.  
  - Fetches results dynamically from the **Deezer API**.  
  - Clicking on a search result takes the user to the **Music Player page**.  
- **Music Player Page**: A dedicated page where users can listen to tracks with audio controls.  
- **Responsive Design**: Built with **Tailwind CSS** to ensure a seamless experience on both desktop and mobile devices.  

## 🛠️ Technologies Used  
- **React**: Frontend framework for building the UI.  
- **React Router**: For navigation between pages.  
- **Axios**: To fetch data from the Deezer API.  
- **Tailwind CSS**: For styling and responsive design.  
- **Deezer API**: Provides track data for search functionality.  
- **Proxy (https://thingproxy.freeboard.io)**: Used to handle CORS issues.  

## ⚙️ Setup Instructions  
To run the project locally, follow these steps:  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/elisas-music-player.git  
   cd elisas-music-player  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Start the development server**:  
   ```bash  
   npm start  
   ```  
   This will launch the app at `http://localhost:3000` in your browser.  

## 📂 Project Structure  
```  
/ src  
  ├── components       # Reusable UI components (Header, Footer, Sidebar)  
  ├── pages            # Core pages (HomePage, DashboardPage, MusicPlayerPage)  
  ├── App.jsx          # Main app configuration and routes  
  └── index.css        # Tailwind configuration  
```  

## 📅 Roadmap (Next Steps)  
- **Enhance Music Player**: Add volume control, track progress bar, and shuffle/repeat options.  
- **Implement Lyrics Feature**: Fetch and display lyrics using the **Lyrics.ovh API**.  
- **Favorites Functionality**: Allow users to mark and save their favorite tracks.  

## 🌟 Acknowledgments  
- **Deezer API** – For providing access to music data.  
- **Tailwind CSS** – For making UI design fast and flexible.  
- **React Router** – For seamless page navigation.  

---

