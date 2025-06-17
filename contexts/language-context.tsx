"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    requestQuote: "REQUEST QUOTE",

    // Hero Section
    heroSlogan: "Simplify. Collaborate. Move Forward.",
    heroSubtitle:
      "Vitruve Consulting & Services is your trusted international partner in engineering, project management, procurement optimization, and operational transformation.",
    bookMeeting: "BOOK A MEETING",

    // About Section
    aboutTitle: "About Us",
    whoWeAre: "Who We Are",
    aboutDescription:
      "Vitruve Consulting & Services is an international consulting firm based in Tunisia. We specialize in supporting businesses in engineering, construction, project management, and operational transformation—offering both on-site and remote solutions.",
    ourMission: "Our Mission",
    missionText:
      "To deliver reliable, flexible, and cost-effective consulting solutions, tailored to your specific needs.",
    ourValues: "Our Values",
    excellenceService: "Excellence in service delivery",
    transparentCollaboration: "Transparent collaboration",
    technicalExpertise: "Technical and operational expertise",
    languagesSpoken: "Languages Spoken: French, English, Arabic",

    // Services Section
    servicesTitle: "Our Services",
    servicesDescription:
      "We specialize in finding the right professional fit for our clients who will work remotely and deliver as expected when needed.",
    operationsConsulting: "Operations Consulting",
    operationsConsultingDesc:
      "Lean coaching, process transformation, and operational performance optimization to streamline your business operations.",
    managementConsulting: "Management Consulting",
    managementConsultingDesc:
      "Project coordination, strategic planning, risk management, and dedicated personnel for short-term or long-term assignments.",

    // Why Choose Us
    whyChooseTitle: "Why Choose Us",
    totalFlexibility: "Total Flexibility",
    flexibilityDesc: "One-time missions, dedicated resources, or long-term contracts",
    costSavings: "Cost Savings",
    costSavingsDesc: "Up to 60% reduction compared to traditional hiring",
    qualifiedTeam: "Qualified Team",
    qualifiedTeamDesc: "Trilingual professionals (French, English, Arabic)",
    noHRComplexity: "Zero HR Complexity",
    noHRComplexityDesc: "We handle sourcing, training, and operational follow-up",

    // Contact Section
    contactTitle: "Contact Us",
    contactDescription: "Looking to streamline your projects or add qualified professionals to your team?",
    sendMessage: "Send us a message",
    yourName: "Your Name",
    yourCompany: "Your Company",
    yourEmail: "Your Email",
    servicesNeeded: "Services Needed",
    yourMessage: "Your Message",
    sendMessageBtn: "SEND MESSAGE",
    email: "Email",
    phone: "Phone",
    address: "Address",
    basedInTunisia: "Based in Tunisia – Operating Internationally",
    website: "Website",

    // Footer
    copyright: "© 2025 VITRUVE GROUPE",
    allRightsReserved: "All rights reserved.",

    // Additional improvements
    loading: "Loading...",
    sending: "Sending...",

    // Success/Error messages
    messageSent: "Message sent successfully!",
    messageError: "Failed to send message. Please try again.",
    allFieldsRequired: "All fields are required.",
    invalidEmail: "Please enter a valid email address.",
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À Propos",
    services: "Services",
    contact: "Contact",
    requestQuote: "DEMANDER UN DEVIS",

    // Hero Section
    heroSlogan: "Simplifiez. Collaborez. Avancez.",
    heroSubtitle:
      "Vitruve Consulting & Services est votre partenaire international de confiance en ingénierie, gestion de projet, optimisation des achats et transformation opérationnelle.",
    bookMeeting: "RÉSERVER UNE RÉUNION",

    // About Section
    aboutTitle: "À Propos",
    whoWeAre: "Qui sommes-nous ?",
    aboutDescription:
      "Vitruve Consulting & Services est un cabinet international de conseil basé en Tunisie. Nous accompagnons les entreprises en ingénierie, construction, gestion de projet et transformation opérationnelle, à distance ou sur site.",
    ourMission: "Notre Mission",
    missionText:
      "Offrir des solutions de conseil fiables, flexibles et compétitives, adaptées à vos besoins spécifiques.",
    ourValues: "Nos Valeurs",
    excellenceService: "Excellence du service",
    transparentCollaboration: "Collaboration transparente",
    technicalExpertise: "Expertise technique et opérationnelle",
    languagesSpoken: "Langues parlées : Français, Anglais, Arabe",

    // Services Section
    servicesTitle: "Nos Services",
    servicesDescription:
      "Nous nous spécialisons dans la recherche du professionnel adapté pour nos clients qui travailleront à distance et livreront comme attendu quand nécessaire.",
    operationsConsulting: "Conseil en Opérations",
    operationsConsultingDesc:
      "Coaching Lean, transformation des processus et optimisation de la performance opérationnelle pour rationaliser vos opérations commerciales.",
    managementConsulting: "Conseil en Gestion",
    managementConsultingDesc:
      "Coordination de projets, planification stratégique, gestion des risques et personnel dédié pour des missions courtes ou longues.",

    // Why Choose Us
    whyChooseTitle: "Pourquoi Nous Choisir",
    totalFlexibility: "Flexibilité Totale",
    flexibilityDesc: "Missions ponctuelles, ressources dédiées, ou contrats longs",
    costSavings: "Réduction des Coûts",
    costSavingsDesc: "Jusqu'à 60 % d'économies par rapport à l'embauche traditionnelle",
    qualifiedTeam: "Équipe Qualifiée",
    qualifiedTeamDesc: "Professionnels trilingues (français, anglais, arabe)",
    noHRComplexity: "Aucune Complexité RH",
    noHRComplexityDesc: "Sourcing, formation, suivi pris en charge",

    // Contact Section
    contactTitle: "Nous Contacter",
    contactDescription:
      "Vous cherchez à optimiser vos projets ou à renforcer votre équipe avec des experts qualifiés ?",
    sendMessage: "Envoyez-nous un message",
    yourName: "Votre Nom",
    yourCompany: "Votre Entreprise",
    yourEmail: "Votre Email",
    servicesNeeded: "Services Recherchés",
    yourMessage: "Votre Message",
    sendMessageBtn: "ENVOYER LE MESSAGE",
    email: "Email",
    phone: "Téléphone",
    address: "Adresse",
    basedInTunisia: "Basé en Tunisie – Opère à l'international",
    website: "Site Web",

    // Footer
    copyright: "© 2025 VITRUVE GROUPE",
    allRightsReserved: "Tous droits réservés.",

    // Additional improvements
    loading: "Chargement...",
    sending: "Envoi...",

    // Success/Error messages
    messageSent: "Message envoyé avec succès!",
    messageError: "Échec de l'envoi du message. Veuillez réessayer.",
    allFieldsRequired: "Tous les champs sont obligatoires.",
    invalidEmail: "Veuillez saisir une adresse email valide.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
