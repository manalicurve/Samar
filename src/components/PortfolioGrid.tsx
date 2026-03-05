"use client";

import { useState } from "react";

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    href: string;
    catHref: string;
    img: string;
    size: "half" | "quarter"; // half = col-md-6, quarter = col-md-3
}

const portfolioItems: PortfolioItem[] = [
    { id: 1, title: "Mahakumbh Haridwar 2021", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/mahakumbh-haridwar-2021/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Kumbh_2-1_1-1000x1000.webp", size: "half" },
    { id: 2, title: "Yeh Road Kisi Ke Baap Ki Nahi: Part 2", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/yeh-road-kisi-ke-baap-ki-nahi-part-2/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/The-Road-NOT-Taken-NO-ENTRY-Zone-ft.-Akshay-Kumar-TVC-on-Road-Safety-1_1-575x575.webp", size: "quarter" },
    { id: 3, title: "Anthem Song for IndianOil's 66th Foundation Day", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/digital-india-future-skills-summit-2024-2/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/website-2-575x575.avif", size: "quarter" },
    { id: 4, title: "Serial: Vijeta (26 Episodes)", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/serial-vijeta-26-episodes/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Vijeta_New-1190x575.avif", size: "half" },
    { id: 5, title: "SBI Presents GIFLIF", category: "Performance & AI Marketing", href: "https://www.creativechannel.in/portfolio/sbi-presents-giflif/", catHref: "https://www.creativechannel.in/portfolio_category/performance-ai-marketing/", img: "https://www.creativechannel.in/wp-content/uploads/2024/04/Giflif-575x575.jpg", size: "quarter" },
    { id: 6, title: "Mission LiFE: Introduction", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/mission-life-introduction/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2023/06/Intro-Mission-Life-1_1.jpg", size: "quarter" },
    { id: 7, title: "Cheetah Day", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/cheetah-day/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Cheetah-Day-1_1-575x575.avif", size: "quarter" },
    { id: 8, title: "Rishi Parampara Aur Shri Ram", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/rishi-parampara-aur-shri-ram/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/1-AI_Rishi-2-575x575.avif", size: "quarter" },
    { id: 9, title: "e-NPS", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/e-nps/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-18-at-3.51.44-PM-1-jpeg.avif", size: "half" },
    { id: 10, title: "MANAS", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/manas/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Manas_1_1_new-575x575.avif", size: "quarter" },
    { id: 11, title: "Lightstorm", category: "Performance & AI Marketing", href: "https://www.creativechannel.in/portfolio/lightstorm/", catHref: "https://www.creativechannel.in/portfolio_category/performance-ai-marketing/", img: "https://www.creativechannel.in/wp-content/uploads/2023/07/Lightstorm.png", size: "quarter" },
    { id: 12, title: "Supercomputers", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/supercomputers/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Cdac_1_1-575x575.avif", size: "quarter" },
    { id: 13, title: "Indian Oil Best Station Awards 2023–2024", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/indian-oil-best-station-awards-2023-2024/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/IOCL_1_1-575x575.avif", size: "quarter" },
    { id: 14, title: "Ram Prasad E-Library", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/ram-prasad-e-library/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/E-Library-_1_1-575x575.avif", size: "quarter" },
    { id: 15, title: "A Tale of Two Drops", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/a-tale-of-two-drops/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2023/06/Polio-Sq.png", size: "quarter" },
    { id: 16, title: "Proof Kya Hai | ISI Mark", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/proof-kya-hai-isi-mark/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2025/10/BIS-1000x1000-1-575x575.avif", size: "quarter" },
    { id: 17, title: "Mera Adhaar Meri Pehchaan", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/mera-adhaar-meri-pehchaan/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2023/06/Aadhar2.png", size: "quarter" },
    { id: 18, title: "Event and Live Coverage of Digital India Future Labs at IIIT Delhi", category: "OOH & Events", href: "https://www.creativechannel.in/portfolio/event-and-live-coverage-of-digital-india-future-labs-at-iiit-delhi/", catHref: "https://www.creativechannel.in/portfolio_category/ooh-events/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/FutureLABS-web-1190x575.jpg", size: "half" },
    { id: 19, title: "PMGKAY", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/pmgkay/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/PMGKAY-1_1-1000x1000.jpg", size: "half" },
    { id: 20, title: "Climate Change", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/climate-change/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/WhatsApp-Image-2025-07-18-at-5.36.02-PM-2-575x575.avif", size: "quarter" },
    { id: 21, title: "Ease of Doing Business", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/ease-of-doing-business/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-19-at-3.20.51-PM-575x575.avif", size: "quarter" },
    { id: 22, title: "Establishment of Ministry of Cooperation", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/establishment-of-ministry-of-cooperation/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/MINISTRY-OF-COOPERATION-Feedback-2-2-575x575.avif", size: "quarter" },
    { id: 23, title: "eMigrate", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/emigrate/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/3-575x575.avif", size: "quarter" },
    { id: 24, title: "Ladakh: Land of Passes", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/ladakh-land-of-passes/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Ladakh-1_1-575x575.jpg", size: "quarter" },
    { id: 25, title: "Cyber Security Campaign", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/cyber-security-campaign/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Iocl-Tvc-Thumbnail-1920x1080-1-1190x575.avif", size: "half" },
    { id: 26, title: "Metal Story", category: "Branding & Design", href: "https://www.creativechannel.in/portfolio/metal-story/", catHref: "https://www.creativechannel.in/portfolio_category/branding-design/", img: "https://www.creativechannel.in/wp-content/uploads/2024/04/MetalStory-thumbnail-575x575.png", size: "quarter" },
    { id: 27, title: "Mission LiFE: Reducing E-Waste", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/mission-life-reducing-e-waste/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2023/07/Mission-Life2.png", size: "quarter" },
    { id: 28, title: "Digital India Future Labs 2024", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/hunter-of-dreaming/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/FutureLABS-1_1-575x575.avif", size: "quarter" },
    { id: 29, title: "Return of Cheetah", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/return-of-cheetah/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Cheetah-1_1-575x575.avif", size: "quarter" },
    { id: 30, title: "Gov.in Secure Intranet", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/gov-in-secure-intranet/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/4-575x575.avif", size: "quarter" },
    { id: 31, title: "World Wetlands Day 2025", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/world-wetlands-day-2025/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2025/07/2-jpg.avif", size: "half" },
    { id: 32, title: "World Environment Day 2025", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/world-environment-day-2025/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2021/04/WhatsApp-Image-2025-07-19-at-3.20.32-PM-575x575.avif", size: "quarter" },
    { id: 33, title: "Samajhdaar Didi", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/samajhdaar-didi/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Samjhdaar-didi-1_1-575x575.jpg", size: "quarter" },
    { id: 34, title: "Homecoming of Antiquities 2024", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/homecoming-of-antiquities-2024/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Homecoming-of-Antiquities_1_1-575x575.avif", size: "quarter" },
    { id: 35, title: "PM Kisan Samman Nidhi Yojana", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/pm-kisan-samman-nidhi-yojana/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/PM-Kisan_1_1-575x575.avif", size: "quarter" },
    { id: 36, title: "National Awards to Teachers – Mrs. Seema Rani", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/national-awards-to-teachers/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Seema1_1-575x575.png", size: "quarter" },
    { id: 37, title: "Fortified Rice", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/fortified-rice/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/RF-575x575.avif", size: "quarter" },
    { id: 38, title: "Environmental Campaign TVC: Say No to Pollution", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/environmental-campaign-tvc-say-no-to-pollution/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Pandit-1_1-1000x1000.jpg", size: "half" },
    { id: 39, title: "Child Labour", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/child-labour/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Child-Lbour-1_1-575x575.jpg", size: "quarter" },
    { id: 40, title: "DPIIT – Felicitation Ceremony", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/felicitation-ceremony/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/DPIIT_1_1-575x575.avif", size: "quarter" },
    { id: 41, title: "Digital India Future Skills Summit 2024", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/digital-india-future-skills-summit-2024/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Digital-India-Future-Skill-Submit-1_1-575x575.webp", size: "quarter" },
    { id: 42, title: "Jago Grahak Jago: Hallmarks", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/jago-grahak-jago-hallmarks/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Hallmark-1_1-575x575.jpg", size: "quarter" },
    { id: 43, title: "Serial PAPA", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/serial-papa/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Papa-575x575.jpg", size: "quarter" },
    { id: 44, title: "INSPIRE – MANAK Testimonial – Manushi Chillar", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/inspire-manak-testimonial-manushi-chillar/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2024/04/INSPIRE-MANAK-1_1-575x575.jpg", size: "quarter" },
    { id: 45, title: "Yeh Road Kisi Ke Baap Ki Nahi: Part 3", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/yeh-road-kisi-ke-baap-ki-nahi-part-3/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Road-kisi-baap-16_9-1190x575.jpg", size: "half" },
    { id: 46, title: "Save Wetlands", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/save-wetlands/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Save-Wetlands-575x575.png", size: "quarter" },
    { id: 47, title: "Kayakalp", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/kayakalp/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Kayakalp-1_1-575x575.jpg", size: "quarter" },
    { id: 48, title: "Pulse Polio Campaign – Amitabh Bachchan", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/pulse-polio-campaign-amitabh-bachchan/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/amitabh-bachchan-1_1-575x575.jpg", size: "quarter" },
    { id: 49, title: "NOTTO", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/notto/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/NOTTO-1_1-575x575.jpg", size: "quarter" },
    { id: 50, title: "Bank – Sponsored Radio Program", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/bank-srp/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Bank-575x575.jpg", size: "quarter" },
    { id: 51, title: "Maitree Diwas – India & Bangladesh", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/maitree-diwas-india-bangladesh/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Maitree-Diwas-1_1-575x575.avif", size: "quarter" },
    { id: 52, title: "Crisis Management Portal", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/crisis-management-portal/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2024/12/IOCL-1_1-jpg.avif", size: "half" },
    { id: 53, title: "Environmental Campaign TVC: Use Public Transport", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/environmental-campaign-tvc-use-public-transport/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Metro-1_1-575x575.jpg", size: "quarter" },
    { id: 54, title: "National Awards to Teachers – Mr. Datta", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/national-awards-to-teachers-mr-datta/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Dutta-1_1-575x575.png", size: "quarter" },
    { id: 55, title: "Return of Antiquities", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/return-of-antiquities/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/Return-of-Antiquities-1_1-575x575.avif", size: "quarter" },
    { id: 56, title: "Environmental Campaign TVC: Wildlife Conservation", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/environmental-campaign-tvc-wildlife-conservation/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Painter2-1_1-575x575.jpg", size: "quarter" },
    { id: 57, title: "National Entrepreneurship Award", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/national-entrepreneurship-award/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/NEA-TVC-3-1_1-575x575.jpg", size: "quarter" },
    { id: 58, title: "CSIR- IMTECH", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/csir-imtech/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/04/CSIR-Imtech-1_1-575x575.jpg", size: "quarter" },
    { id: 59, title: "Onboarding of Cooperatives on GeM Portal", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/onboarding-of-cooperatives-on-gem-portal/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/Gem-1_1-575x575.jpg", size: "quarter" },
    { id: 60, title: "World Tiger Day – Jingle", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/world-tiger-day-jingle/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/World-Tiger-Day-575x575.jpg", size: "quarter" },
    { id: 61, title: "Defending India's Borders", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/defending-indias-borders/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/defending-indian-Borders-1_1-1000x1000.jpg", size: "half" },
    { id: 62, title: "PMGKAY – Jingle", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/pmgkay-jingle/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/PMGKAY-575x575.png", size: "quarter" },
    { id: 63, title: "Coastal Security of India", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/coastal-security-of-india/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Coastal-Security-1_1-575x575.jpg", size: "quarter" },
    { id: 64, title: "Event and Live Coverage of Digital India Future Skills Summit, Guwahati", category: "OOH & Events", href: "https://www.creativechannel.in/portfolio/event-and-live-coverage-of-digital-india-future-skills-summit-in-guwahati-assam/", catHref: "https://www.creativechannel.in/portfolio_category/ooh-events/", img: "https://www.creativechannel.in/wp-content/uploads/2019/02/Digital-India-Future-Labs-1190x575.png", size: "half" },
    { id: 65, title: "Tejas – Jingle", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/tejas-jingle/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Tejas-Csir-575x575.png", size: "quarter" },
    { id: 66, title: "Cyber Crime", category: "Animation/ AI", href: "https://www.creativechannel.in/portfolio/cyber-crime/", catHref: "https://www.creativechannel.in/portfolio_category/animation-ai/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Cyber-crime-1_1-575x575.jpg", size: "quarter" },
    { id: 67, title: "CSIR-CECRI", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/csir-cecri/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/CSIR-CECRI-1_1-575x575.jpg", size: "quarter" },
    { id: 68, title: "AIIMS Jammu", category: "Visual Storytelling", href: "https://www.creativechannel.in/portfolio/aiims-jammu/", catHref: "https://www.creativechannel.in/portfolio_category/visual-storytelling/", img: "https://www.creativechannel.in/wp-content/uploads/2024/06/Aiims-1_1.jpg", size: "quarter" },
    { id: 69, title: "National Deworming Day – Jingle", category: "Media Campaigns", href: "https://www.creativechannel.in/portfolio/national-deworming-day/", catHref: "https://www.creativechannel.in/portfolio_category/media-campaigns/", img: "https://www.creativechannel.in/wp-content/uploads/2019/03/Deworming-new-575x575.webp", size: "quarter" },
];

const allCategories = ["All", ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? portfolioItems
            : portfolioItems.filter((p) => p.category === activeFilter);

    return (
        <section className="portfolio-section" id="tracem-portfolio">
            {/* Filter Bar */}
            <div className="portfolio-filters">
                {allCategories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn${activeFilter === cat ? " active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="portfolio-grid">
                {filtered.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`portfolio-item${item.size === "half" ? " portfolio-item--half" : ""}`}
                        aria-label={item.title}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="portfolio-item__img"
                            loading="lazy"
                        />
                        <div className="portfolio-item__overlay">
                            <div className="portfolio-item__details">
                                <p className="portfolio-item__cat">{item.category}</p>
                                <h3 className="portfolio-item__title">{item.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
