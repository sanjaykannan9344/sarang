import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import VideoPlayer from "./components/UI/VideoPlayer";
import TextToSpeach from "./components/UI/TextToSpeach";
import IndexPage from "./components/Indexpage/IndexPage";
import ImageViewerPage from "./components/ImageviewerPage/ImageViewerPage";
import IndexVideoPage from "./components/Indexvideopage/IndexVideoPage";
import DiagramIndex from "./components/DiagramindexPage/DiagramIndex";
import IndexTitle from "./components/Titlepages/IndexTitle";
import ContentTitlePage from "./components/Titlepages/ContentTitlePage";
import DiagramImage from "./components/DiagramindexPage/DiagramImage";
import DFMTitlePage from "./components/Titlepages/DFMTitlePage";
import SpecificationTitle from "./components/Titlepages/SpecificationTitle";
import SpecImageViewer from "./components/SpecImageviewer/SpecImageViewer";
import ConfigurationTitle from "./components/Titlepages/ConfigurationTitle";
import ConfigImageViewer from "./components/ConfigImageViewer/ConfigImageViewer";
import Mechanical from "./components/Mechanical";
import Shelter from "./components/Shelter";
// import SideNav from "./components/Sidenav/SideNav";

import Hotspot from "./components/UI/Hotspot";
import Hotspot1 from "./components/UI/Hotspot1";
import GpsAntenna from "./components/UI/GpsAntenna";
export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/textToSpeach" element={<TextToSpeach />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/imageViewer/:id" element={<ImageViewerPage />} />
        <Route path="/indexvideo" element={<IndexVideoPage />} />
        <Route path="/diagramindex" element={<DiagramIndex />} />
        <Route path="/diagramimage/:id" element={<DiagramImage />} />
        <Route path="/titleindex" element={<IndexTitle />} />
        <Route path="/contenttitle/:id" element={<ContentTitlePage />} />
        <Route path="/dfmtitle" element={<DFMTitlePage />} />
        <Route path="/spectitle" element={<SpecificationTitle />} />
        <Route path="/specimage/:id" element={<SpecImageViewer />} />
        <Route path="/configtitle" element={<ConfigurationTitle />} />
        <Route path="/configimage/:id" element={<ConfigImageViewer />} />
        <Route path="/mechanical/:id" element={<Mechanical />} />
        <Route path="/shelter/:id" element={<Shelter />} />
        <Route path="/Hotspot" element={<Hotspot />} />
        <Route path="/Hotspot1" element={<Hotspot1 />} />
        <Route path="/GpsAntenna" element={<GpsAntenna />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
