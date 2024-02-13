import './App.css';
import React , {useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = () =>  {
  let apiKey="8ceb50299e3847fd9abd941096b22670"

  const [progress,setProgress]=useState(0)

    return (
        <div>
          <Router>
            <Navbar/>
            <LoadingBar
              color='#f11946'
              height={3}
              progress={progress}
            />
            <Routes>

              <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" country="in" countryName="India"category="general" pageSize={9}/>} />
              <Route exact path="/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" country="in" countryName="India"category="entertainment" pageSize={9}/>} />
              <Route exact path="/General" element={<News apiKey={apiKey} setProgress={setProgress} key="general" country="in" countryName="India"category="general" pageSize={9}/>} />
              <Route exact path="/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" country="in" countryName="India"category="health" pageSize={9}/>} />
              <Route exact path="/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" country="in" countryName="India"category="science" pageSize={9}/>} />
              <Route exact path="/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" country="in" countryName="India"category="sports" pageSize={9}/>} />
              <Route exact path="/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" country="in" countryName="India"category="technology" pageSize={9}/>} />
              
              {/* 1) UAE */}
              <Route exact path="/UAE" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUAE" country="ae" countryName="UAE" category="general" pageSize={9}/>} />
              <Route exact path="/UAE/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentUA" country="ae" countryName="UAE"category="entertainment" pageSize={9}/>} />
              <Route exact path="/UAE/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUA" country="ae" countryName="UAE"category="general" pageSize={9}/>} />
              <Route exact path="/UAE/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthUA" country="ae" countryName="UAE"category="health" pageSize={9}/>} />
              <Route exact path="/UAE/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceUA" country="ae" countryName="UAE"category="science" pageSize={9}/>} />
              <Route exact path="/UAE/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsUA" country="ae" countryName="UAE"category="sports" pageSize={9}/>} />
              <Route exact path="/UAE/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyUA" country="ae" countryName="UAE"category="technology" pageSize={9}/>} />
            
              {/* 2) Argentina */}
              <Route exact path="/Argentina" element={<News apiKey={apiKey} setProgress={setProgress} key="generalArg" country="ar" countryName="Argentina" category="general" pageSize={9}/>} />
              <Route exact path="/Argentina/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentAr" country="ar" countryName="Argentina" category="entertainment" pageSize={9}/>} />
              <Route exact path="/Argentina/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalAr" country="ar" countryName="Argentina" category="general" pageSize={9}/>} />
              <Route exact path="/Argentina/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthAr" country="ar" countryName="Argentina" category="health" pageSize={9}/>} />
              <Route exact path="/Argentina/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceAr" country="ar" countryName="Argentina" category="science" pageSize={9}/>} />
              <Route exact path="/Argentina/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsAr" country="ar" countryName="Argentina" category="sports" pageSize={9}/>} />
              <Route exact path="/Argentina/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyAr" country="ar" countryName="Argentina" category="technology" pageSize={9}/>} />

              {/* 3) Austria */}
              <Route exact path="/Austria" element={<News apiKey={apiKey} setProgress={setProgress} key="generalAus" country="at" countryName="Austria"  category="general" pageSize={9}/>} />
              <Route exact path="/Austria/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentAu" country="at" countryName="Austria" category="entertainment" pageSize={9}/>} />
              <Route exact path="/Austria/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalAu" country="at" countryName="Austria" category="general" pageSize={9}/>} />
              <Route exact path="/Austria/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthAu" country="at" countryName="Austria" category="health" pageSize={9}/>} />
              <Route exact path="/Austria/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceAu" country="at" countryName="Austria" category="science" pageSize={9}/>} />
              <Route exact path="/Austria/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsAu" country="at" countryName="Austria" category="sports" pageSize={9}/>} />
              <Route exact path="/Austria/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyAu" country="at" countryName="Austria" category="technology" pageSize={9}/>} />
              
              {/* 4) Australia */}
              <Route exact path="/Australia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalAust" country="au" countryName="Australia" category="general" pageSize={9}/>} />
              <Route exact path="/Australia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentAus" country="au" countryName="Australia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Australia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalAus" country="au" countryName="Australia"category="general" pageSize={9}/>} />
              <Route exact path="/Australia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthAus" country="au" countryName="Australia"category="health" pageSize={9}/>} />
              <Route exact path="/Australia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceAus" country="au" countryName="Australia"category="science" pageSize={9}/>} />
              <Route exact path="/Australia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsAus" country="au" countryName="Australia"category="sports" pageSize={9}/>} />
              <Route exact path="/Australia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyAus" country="au" countryName="Australia"category="technology" pageSize={9}/>} />

              {/* 5) Belgium */}
              <Route exact path="/Belgium" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBel" country="be" countryName="Belgium" category="general" pageSize={9}/>} />
              <Route exact path="/Belgium/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentBe" country="be" countryName="Belgium"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Belgium/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBe" country="be" countryName="Belgium"category="general" pageSize={9}/>} />
              <Route exact path="/Belgium/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthBe" country="be" countryName="Belgium"category="health" pageSize={9}/>} />
              <Route exact path="/Belgium/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceBe" country="be" countryName="Belgium"category="science" pageSize={9}/>} />
              <Route exact path="/Belgium/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsBe" country="be" countryName="Belgium"category="sports" pageSize={9}/>} />
              <Route exact path="/Belgium/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyBe" country="be" countryName="Belgium"category="technology" pageSize={9}/>} />
              
              {/* 6) Bulgaria */}
              <Route exact path="/Bulgaria" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBul" country="bg" countryName="Bulgaria" category="general" pageSize={9}/>} />
              <Route exact path="/Bulgaria/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentBu" country="bg" countryName="Bulgaria"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Bulgaria/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBu" country="bg" countryName="Bulgaria"category="general" pageSize={9}/>} />
              <Route exact path="/Bulgaria/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthBu" country="bg" countryName="Bulgaria"category="health" pageSize={9}/>} />
              <Route exact path="/Bulgaria/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceBu" country="bg" countryName="Bulgaria"category="science" pageSize={9}/>} />
              <Route exact path="/Bulgaria/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsBu" country="bg" countryName="Bulgaria"category="sports" pageSize={9}/>} />
              <Route exact path="/Bulgaria/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyBu" country="bg" countryName="Bulgaria"category="technology" pageSize={9}/>} />
              
              {/* 7) Brazil */}
              <Route exact path="/Brazil" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBra" country="br" countryName="Brazil" category="general" pageSize={9}/>} />
              <Route exact path="/Brazil/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentBr" country="br" countryName="Brazil"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Brazil/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalBr" country="br" countryName="Brazil" category="general" pageSize={9}/>} />
              <Route exact path="/Brazil/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthBr" country="br" countryName="Brazil" category="health" pageSize={9}/>} />
              <Route exact path="/Brazil/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceBr" country="br" countryName="Brazil" category="science" pageSize={9}/>} />
              <Route exact path="/Brazil/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsBr" country="br" countryName="Brazil" category="sports" pageSize={9}/>} />
              <Route exact path="/Brazil/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyBr" country="br" countryName="Brazil" category="technology" pageSize={9}/>} />
              
              {/* 8) Canada */}
              <Route exact path="/Canada" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCan" country="ca" countryName="Canada" category="general" pageSize={9}/>} />
              <Route exact path="/Canada/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentCa" country="ca" countryName="Canada"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Canada/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCa" country="ca" countryName="Canada" category="general" pageSize={9}/>} />
              <Route exact path="/Canada/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthCa" country="ca" countryName="Canada" category="health" pageSize={9}/>} />
              <Route exact path="/Canada/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceCa" country="ca" countryName="Canada" category="science" pageSize={9}/>} />
              <Route exact path="/Canada/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsCa" country="ca" countryName="Canada" category="sports" pageSize={9}/>} />
              <Route exact path="/Canada/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyCa" country="ca" countryName="Canada"category="technology" pageSize={9}/>} />
              
              {/* 9) Switzerland */}
              <Route exact path="/Switzerland" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSwi" country="ch" countryName="Switzerland" category="general" pageSize={9}/>} />
              <Route exact path="/Switzerland/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSw" country="ch" countryName="Switzerland"category="buisness" pageSize={9}/>} />
              <Route exact path="/Switzerland/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSw" country="ch" countryName="Switzerland"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Switzerland/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSw" country="ch" countryName="Switzerland" category="general" pageSize={9}/>} />
              <Route exact path="/Switzerland/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSw" country="ch" countryName="Switzerland" category="health" pageSize={9}/>} />
              <Route exact path="/Switzerland/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSw" country="ch" countryName="Switzerland" category="science" pageSize={9}/>} />
              <Route exact path="/Switzerland/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSw" country="ch" countryName="Switzerland" category="sports" pageSize={9}/>} />
              <Route exact path="/Switzerland/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySw" country="ch" countryName="Switzerland"category="technology" pageSize={9}/>} />
              
              {/* 10) China */}
              <Route exact path="/China" element={<News apiKey={apiKey} setProgress={setProgress} key="generalChi" country="cn" countryName="China" category="general" pageSize={9}/>} />
              <Route exact path="/China/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessCh" country="cn" countryName="China"category="buisness" pageSize={9}/>} />
              <Route exact path="/China/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentCh" country="cn" countryName="China"category="entertainment" pageSize={9}/>} />
              <Route exact path="/China/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCh" country="cn" countryName="China" category="general" pageSize={9}/>} />
              <Route exact path="/China/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthCh" country="cn" countryName="China" category="health" pageSize={9}/>} />
              <Route exact path="/China/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceCh" country="cn" countryName="China" category="science" pageSize={9}/>} />
              <Route exact path="/China/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsCh" country="cn" countryName="China" category="sports" pageSize={9}/>} />
              <Route exact path="/China/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyCh" country="cn" countryName="China"category="technology" pageSize={9}/>} />
              
              {/* 11) Colombia */}
              <Route exact path="/Colombia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCol" country="co" countryName="Colombia" category="general" pageSize={9}/>} />
              <Route exact path="/Colombia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessCo" country="co" countryName="Colombia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Colombia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentCo" country="co" countryName="Colombia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Colombia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCo" country="co" countryName="Colombia" category="general" pageSize={9}/>} />
              <Route exact path="/Colombia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthCo" country="co" countryName="Colombia" category="health" pageSize={9}/>} />
              <Route exact path="/Colombia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceCo" country="co" countryName="Colombia" category="science" pageSize={9}/>} />
              <Route exact path="/Colombia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsCo" country="co" countryName="Colombia" category="sports" pageSize={9}/>} />
              <Route exact path="/Colombia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyCo" country="co" countryName="Colombia"category="technology" pageSize={9}/>} />
              
              {/* 12) Cuba */}
              <Route exact path="/Cuba" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCub" country="cu" countryName="Cuba" category="general" pageSize={9}/>} />
              <Route exact path="/Cuba/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessCu" country="cu" countryName="Cuba"category="buisness" pageSize={9}/>} />
              <Route exact path="/Cuba/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentCu" country="cu" countryName="Cuba"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Cuba/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCu" country="cu" countryName="Cuba" category="general" pageSize={9}/>} />
              <Route exact path="/Cuba/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthCu" country="cu" countryName="Cuba" category="health" pageSize={9}/>} />
              <Route exact path="/Cuba/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceCu" country="cu" countryName="Cuba" category="science" pageSize={9}/>} />
              <Route exact path="/Cuba/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsCu" country="cu" countryName="Cuba" category="sports" pageSize={9}/>} />
              <Route exact path="/Cuba/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyCu" country="cu" countryName="Cuba"category="technology" pageSize={9}/>} />
              
              {/* 13) Czechia */}
              <Route exact path="/Czechia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCze" country="cz" countryName="Czechia" category="general" pageSize={9}/>} />
              <Route exact path="/Czechia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessCz" country="cz" countryName="Czechia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Czechia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentCz" country="cz" countryName="Czechia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Czechia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalCz" country="cz" countryName="Czechia" category="general" pageSize={9}/>} />
              <Route exact path="/Czechia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthCz" country="cz" countryName="Czechia" category="health" pageSize={9}/>} />
              <Route exact path="/Czechia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceCz" country="cz" countryName="Czechia" category="science" pageSize={9}/>} />
              <Route exact path="/Czechia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsCz" country="cz" countryName="Czechia" category="sports" pageSize={9}/>} />
              <Route exact path="/Czechia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyCz" country="cz" countryName="Czechia"category="technology" pageSize={9}/>} />
              
              {/* 14) Germany */}
              <Route exact path="/Germany" element={<News apiKey={apiKey} setProgress={setProgress} key="generalGer" country="de" countryName="Germany" category="general" pageSize={9}/>} />
              <Route exact path="/Germany/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessGe" country="de" countryName="Germany"category="buisness" pageSize={9}/>} />
              <Route exact path="/Germany/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentGe" country="de" countryName="Germany"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Germany/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalGe" country="de" countryName="Germany" category="general" pageSize={9}/>} />
              <Route exact path="/Germany/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthGe" country="de" countryName="Germany" category="health" pageSize={9}/>} />
              <Route exact path="/Germany/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceGe" country="de" countryName="Germany" category="science" pageSize={9}/>} />
              <Route exact path="/Germany/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsGe" country="de" countryName="Germany" category="sports" pageSize={9}/>} />
              <Route exact path="/Germany/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyGe" country="de" countryName="Germany"category="technology" pageSize={9}/>} />
              
              {/* 15) Egypt */}
              <Route exact path="/Egypt" element={<News apiKey={apiKey} setProgress={setProgress} key="generalEgy" country="eg" countryName="Egypt" category="general" pageSize={9}/>} />
              <Route exact path="/Egypt/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessEg" country="eg" countryName="Egypt"category="buisness" pageSize={9}/>} />
              <Route exact path="/Egypt/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentEg" country="eg" countryName="Egypt"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Egypt/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalEg" country="eg" countryName="Egypt" category="general" pageSize={9}/>} />
              <Route exact path="/Egypt/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthEg" country="eg" countryName="Egypt" category="health" pageSize={9}/>} />
              <Route exact path="/Egypt/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceEg" country="eg" countryName="Egypt" category="science" pageSize={9}/>} />
              <Route exact path="/Egypt/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsEg" country="eg" countryName="Egypt" category="sports" pageSize={9}/>} />
              <Route exact path="/Egypt/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyEg" country="eg" countryName="Egypt"category="technology" pageSize={9}/>} />

              {/* 16) France */}
              <Route exact path="/France" element={<News apiKey={apiKey} setProgress={setProgress} key="generalFra" country="fr" countryName="France" category="general" pageSize={9}/>} />
              <Route exact path="/France/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessFr" country="fr" countryName="France"category="buisness" pageSize={9}/>} />
              <Route exact path="/France/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentFr" country="fr" countryName="France"category="entertainment" pageSize={9}/>} />
              <Route exact path="/France/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalFr" country="fr" countryName="France" category="general" pageSize={9}/>} />
              <Route exact path="/France/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthFr" country="fr" countryName="France" category="health" pageSize={9}/>} />
              <Route exact path="/France/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceFr" country="fr" countryName="France" category="science" pageSize={9}/>} />
              <Route exact path="/France/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsFr" country="fr" countryName="France" category="sports" pageSize={9}/>} />
              <Route exact path="/France/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyFr" country="fr" countryName="France"category="technology" pageSize={9}/>} />
 
              {/* 17) United-Kingdom */}
              <Route exact path="/United-Kingdom" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUni" country="gb" countryName="United Kingdom" category="general" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessUn" country="gb" countryName="United Kingdom"category="buisness" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentUn" country="gb" countryName="United Kingdom"category="entertainment" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUn" country="gb" countryName="United Kingdom" category="general" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthUn" country="gb" countryName="United Kingdom" category="health" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceUn" country="gb" countryName="United Kingdom" category="science" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsUn" country="gb" countryName="United Kingdom" category="sports" pageSize={9}/>} />
              <Route exact path="/United-Kingdom/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyUn" country="gb" countryName="United Kingdom"category="technology" pageSize={9}/>} />

              {/* 18) Greece */}
              <Route exact path="/Greece" element={<News apiKey={apiKey} setProgress={setProgress} key="generalGre" country="gr" countryName="Greece" category="general" pageSize={9}/>} />
              <Route exact path="/Greece/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessGr" country="gr" countryName="Greece"category="buisness" pageSize={9}/>} />
              <Route exact path="/Greece/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentGr" country="gr" countryName="Greece"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Greece/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalGr" country="gr" countryName="Greece" category="general" pageSize={9}/>} />
              <Route exact path="/Greece/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthGr" country="gr" countryName="Greece" category="health" pageSize={9}/>} />
              <Route exact path="/Greece/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceGr" country="gr" countryName="Greece" category="science" pageSize={9}/>} />
              <Route exact path="/Greece/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsGr" country="gr" countryName="Greece" category="sports" pageSize={9}/>} />
              <Route exact path="/Greece/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyGr" country="gr" countryName="Greece"category="technology" pageSize={9}/>} />

              {/* 19) Honkong */}
              <Route exact path="/Honkong" element={<News apiKey={apiKey} setProgress={setProgress} key="generalHon" country="hk" countryName="Hongkong" category="general" pageSize={9}/>} />
              <Route exact path="/Honkong/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessHo" country="hk" countryName="Hongkong"category="buisness" pageSize={9}/>} />
              <Route exact path="/Honkong/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentHo" country="hk" countryName="Hongkong"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Honkong/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalHo" country="hk" countryName="Hongkong" category="general" pageSize={9}/>} />
              <Route exact path="/Honkong/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthHo" country="hk" countryName="Hongkong" category="health" pageSize={9}/>} />
              <Route exact path="/Honkong/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceHo" country="hk" countryName="Hongkong" category="science" pageSize={9}/>} />
              <Route exact path="/Honkong/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsHo" country="hk" countryName="Hongkong" category="sports" pageSize={9}/>} />
              <Route exact path="/Honkong/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyHo" country="hk" countryName="Hongkong"category="technology" pageSize={9}/>} />

              {/* 20) Hungary */}
              <Route exact path="/Hungary" element={<News apiKey={apiKey} setProgress={setProgress} key="generalHun" country="hu" countryName="Hungary" category="general" pageSize={9}/>} />
              <Route exact path="/Hungary/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessHu" country="hu" countryName="Hungary"category="buisness" pageSize={9}/>} />
              <Route exact path="/Hungary/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentHu" country="hu" countryName="Hungary"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Hungary/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalHu" country="hu" countryName="Hungary" category="general" pageSize={9}/>} />
              <Route exact path="/Hungary/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthHu" country="hu" countryName="Hungary" category="health" pageSize={9}/>} />
              <Route exact path="/Hungary/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceHu" country="hu" countryName="Hungary" category="science" pageSize={9}/>} />
              <Route exact path="/Hungary/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsHu" country="hu" countryName="Hungary" category="sports" pageSize={9}/>} />
              <Route exact path="/Hungary/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyHu" country="hu" countryName="Hungary"category="technology" pageSize={9}/>} />

              {/* 21) Indonesia */}
              <Route exact path="/Indonesia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIndo" country="id" countryName="Indonesia" category="general" pageSize={9}/>} />
              <Route exact path="/Indonesia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessIndo" country="id" countryName="Indonesia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Indonesia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentIndo" country="id" countryName="Indonesia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Indonesia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIndo" country="id" countryName="Indonesia" category="general" pageSize={9}/>} />
              <Route exact path="/Indonesia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthIndo" country="id" countryName="Indonesia" category="health" pageSize={9}/>} />
              <Route exact path="/Indonesia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceIndo" country="id" countryName="Indonesia" category="science" pageSize={9}/>} />
              <Route exact path="/Indonesia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsIndo" country="id" countryName="Indonesia" category="sports" pageSize={9}/>} />
              <Route exact path="/Indonesia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyIndo" country="id" countryName="Indonesia"category="technology" pageSize={9}/>} />

              {/* 22) Ireland */}
              <Route exact path="/Ireland" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIre" country="ie" countryName="Ireland" category="general" pageSize={9}/>} />
              <Route exact path="/Ireland/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessIr" country="ie" countryName="Ireland"category="buisness" pageSize={9}/>} />
              <Route exact path="/Ireland/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentIr" country="ie" countryName="Ireland"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Ireland/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIr" country="ie" countryName="Ireland" category="general" pageSize={9}/>} />
              <Route exact path="/Ireland/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthIr" country="ie" countryName="Ireland" category="health" pageSize={9}/>} />
              <Route exact path="/Ireland/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceIr" country="ie" countryName="Ireland" category="science" pageSize={9}/>} />
              <Route exact path="/Ireland/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsIr" country="ie" countryName="Ireland" category="sports" pageSize={9}/>} />
              <Route exact path="/Ireland/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyIr" country="ie" countryName="Ireland"category="technology" pageSize={9}/>} />

              {/* 23) Israel */}
              <Route exact path="/Israel" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIsr" country="il" countryName="Israel" category="general" pageSize={9}/>} />
              <Route exact path="/Israel/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessIs" country="il" countryName="Israel"category="buisness" pageSize={9}/>} />
              <Route exact path="/Israel/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentIs" country="il" countryName="Israel"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Israel/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIs" country="il" countryName="Israel" category="general" pageSize={9}/>} />
              <Route exact path="/Israel/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthIs" country="il" countryName="Israel" category="health" pageSize={9}/>} />
              <Route exact path="/Israel/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceIs" country="il" countryName="Israel" category="science" pageSize={9}/>} />
              <Route exact path="/Israel/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsIs" country="il" countryName="Israel" category="sports" pageSize={9}/>} />
              <Route exact path="/Israel/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyIs" country="il" countryName="Israel"category="technology" pageSize={9}/>} />

              {/* 24) India */}
              <Route exact path="/India" element={<News apiKey={apiKey} setProgress={setProgress} key="generalInd" country="in" countryName="India" category="general" pageSize={9}/>} />
              <Route exact path="/India/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessIn" country="in" countryName="India"category="buisness" pageSize={9}/>} />
              <Route exact path="/India/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentIn" country="in" countryName="India"category="entertainment" pageSize={9}/>} />
              <Route exact path="/India/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIn" country="in" countryName="India" category="general" pageSize={9}/>} />
              <Route exact path="/India/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthIn" country="in" countryName="India" category="health" pageSize={9}/>} />
              <Route exact path="/India/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceIn" country="in" countryName="India" category="science" pageSize={9}/>} />
              <Route exact path="/India/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsIn" country="in" countryName="India" category="sports" pageSize={9}/>} />
              <Route exact path="/India/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyIn" country="in" countryName="India"category="technology" pageSize={9}/>} />

              {/* 25) Italy */}
              <Route exact path="/Italy" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIta" country="it" countryName="Italy" category="general" pageSize={9}/>} />
              <Route exact path="/Italy/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessIt" country="it" countryName="Italy"category="buisness" pageSize={9}/>} />
              <Route exact path="/Italy/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentIt" country="it" countryName="Italy"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Italy/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalIt" country="it" countryName="Italy" category="general" pageSize={9}/>} />
              <Route exact path="/Italy/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthIt" country="it" countryName="Italy" category="health" pageSize={9}/>} />
              <Route exact path="/Italy/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceIt" country="it" countryName="Italy" category="science" pageSize={9}/>} />
              <Route exact path="/Italy/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsIt" country="it" countryName="Italy" category="sports" pageSize={9}/>} />
              <Route exact path="/Italy/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyIt" country="it" countryName="Italy"category="technology" pageSize={9}/>} />

              {/* 26) Japan */}
              <Route exact path="/Japan" element={<News apiKey={apiKey} setProgress={setProgress} key="generalJap" country="jp" countryName="Japan" category="general" pageSize={9}/>} />
              <Route exact path="/Japan/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessJa" country="jp" countryName="Japan"category="buisness" pageSize={9}/>} />
              <Route exact path="/Japan/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentJa" country="jp" countryName="Japan"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Japan/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalJa" country="jp" countryName="Japan" category="general" pageSize={9}/>} />
              <Route exact path="/Japan/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthJa" country="jp" countryName="Japan" category="health" pageSize={9}/>} />
              <Route exact path="/Japan/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceJa" country="jp" countryName="Japan" category="science" pageSize={9}/>} />
              <Route exact path="/Japan/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsJa" country="jp" countryName="Japan" category="sports" pageSize={9}/>} />
              <Route exact path="/Japan/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyJa" country="jp" countryName="Japan"category="technology" pageSize={9}/>} />

              {/* 27) South-Korea */}
              <Route exact path="/South-Korea" element={<News apiKey={apiKey} setProgress={setProgress} key="generalKor" country="kr" countryName="South Korea" category="general" pageSize={9}/>} />
              <Route exact path="/South-Korea/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessKo" country="kr" countryName="South Korea"category="buisness" pageSize={9}/>} />
              <Route exact path="/South-Korea/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentKo" country="kr" countryName="South Korea"category="entertainment" pageSize={9}/>} />
              <Route exact path="/South-Korea/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalKo" country="kr" countryName="South Korea" category="general" pageSize={9}/>} />
              <Route exact path="/South-Korea/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthKo" country="kr" countryName="South Korea" category="health" pageSize={9}/>} />
              <Route exact path="/South-Korea/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceKo" country="kr" countryName="South Korea" category="science" pageSize={9}/>} />
              <Route exact path="/South-Korea/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsKo" country="kr" countryName="South Korea" category="sports" pageSize={9}/>} />
              <Route exact path="/South-Korea/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyKo" country="kr" countryName="South Korea"category="technology" pageSize={9}/>} />

              {/* 28) Lithuanina */}
              <Route exact path="/Lithuania" element={<News apiKey={apiKey} setProgress={setProgress} key="generalLit" country="lt" countryName="Lithuania" category="general" pageSize={9}/>} />
              <Route exact path="/Lithuania/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessLi" country="lt" countryName="Lithuania"category="buisness" pageSize={9}/>} />
              <Route exact path="/Lithuania/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentLi" country="lt" countryName="Lithuania"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Lithuania/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalLi" country="lt" countryName="Lithuania" category="general" pageSize={9}/>} />
              <Route exact path="/Lithuania/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthLi" country="lt" countryName="Lithuania" category="health" pageSize={9}/>} />
              <Route exact path="/Lithuania/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceLi" country="lt" countryName="Lithuania" category="science" pageSize={9}/>} />
              <Route exact path="/Lithuania/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsLi" country="lt" countryName="Lithuania" category="sports" pageSize={9}/>} />
              <Route exact path="/Lithuania/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyLi" country="lt" countryName="Lithuania"category="technology" pageSize={9}/>} />

              {/* 29) Latvia */}
              <Route exact path="/Latvia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalLat" country="lv" countryName="Latvia" category="general" pageSize={9}/>} />
              <Route exact path="/Latvia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessLa" country="lv" countryName="Latvia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Latvia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentLa" country="lv" countryName="Latvia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Latvia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalLa" country="lv" countryName="Latvia" category="general" pageSize={9}/>} />
              <Route exact path="/Latvia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthLa" country="lv" countryName="Latvia" category="health" pageSize={9}/>} />
              <Route exact path="/Latvia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceLa" country="lv" countryName="Latvia" category="science" pageSize={9}/>} />
              <Route exact path="/Latvia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsLa" country="lv" countryName="Latvia" category="sports" pageSize={9}/>} />
              <Route exact path="/Latvia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyLa" country="lv" countryName="Latvia"category="technology" pageSize={9}/>} />

              {/* 30) Morocco */}
              <Route exact path="/Morocco" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMor" country="ma" countryName="Morocco" category="general" pageSize={9}/>} />
              <Route exact path="/Morocco/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessMo" country="ma" countryName="Morocco"category="buisness" pageSize={9}/>} />
              <Route exact path="/Morocco/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentMo" country="ma" countryName="Morocco"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Morocco/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMo" country="ma" countryName="Morocco" category="general" pageSize={9}/>} />
              <Route exact path="/Morocco/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthMo" country="ma" countryName="Morocco" category="health" pageSize={9}/>} />
              <Route exact path="/Morocco/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceMo" country="ma" countryName="Morocco" category="science" pageSize={9}/>} />
              <Route exact path="/Morocco/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsMo" country="ma" countryName="Morocco" category="sports" pageSize={9}/>} />
              <Route exact path="/Morocco/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyMo" country="ma" countryName="Morocco"category="technology" pageSize={9}/>} />

              {/* 31) Mexico */}
              <Route exact path="/Mexico" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMex" country="mx" countryName="Mexico" category="general" pageSize={9}/>} />
              <Route exact path="/Mexico/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessMex" country="mx" countryName="Mexico"category="buisness" pageSize={9}/>} />
              <Route exact path="/Mexico/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentMex" country="mx" countryName="Mexico"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Mexico/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMex" country="mx" countryName="Mexico" category="general" pageSize={9}/>} />
              <Route exact path="/Mexico/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthMex" country="mx" countryName="Mexico" category="health" pageSize={9}/>} />
              <Route exact path="/Mexico/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceMex" country="mx" countryName="Mexico" category="science" pageSize={9}/>} />
              <Route exact path="/Mexico/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsMex" country="mx" countryName="Mexico" category="sports" pageSize={9}/>} />
              <Route exact path="/Mexico/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyMex" country="mx" countryName="Mexico"category="technology" pageSize={9}/>} />

              {/* 32) Malaysia */}
              <Route exact path="/Malaysia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMal" country="my" countryName="Malaysia" category="general" pageSize={9}/>} />
              <Route exact path="/Malaysia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessMa" country="my" countryName="Malaysia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Malaysia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentMa" country="my" countryName="Malaysia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Malaysia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalMa" country="my" countryName="Malaysia" category="general" pageSize={9}/>} />
              <Route exact path="/Malaysia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthMa" country="my" countryName="Malaysia" category="health" pageSize={9}/>} />
              <Route exact path="/Malaysia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceMa" country="my" countryName="Malaysia" category="science" pageSize={9}/>} />
              <Route exact path="/Malaysia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsMa" country="my" countryName="Malaysia" category="sports" pageSize={9}/>} />
              <Route exact path="/Malaysia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyMa" country="my" countryName="Malaysia"category="technology" pageSize={9}/>} />

              {/* 33) Nigeria */}
              <Route exact path="/Nigeria" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNig" country="ng" countryName="Nigeria" category="general" pageSize={9}/>} />
              <Route exact path="/Nigeria/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessNi" country="ng" countryName="Nigeria"category="buisness" pageSize={9}/>} />
              <Route exact path="/Nigeria/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentNi" country="ng" countryName="Nigeria"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Nigeria/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNi" country="ng" countryName="Nigeria" category="general" pageSize={9}/>} />
              <Route exact path="/Nigeria/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthNi" country="ng" countryName="Nigeria" category="health" pageSize={9}/>} />
              <Route exact path="/Nigeria/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceNi" country="ng" countryName="Nigeria" category="science" pageSize={9}/>} />
              <Route exact path="/Nigeria/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsNi" country="ng" countryName="Nigeria" category="sports" pageSize={9}/>} />
              <Route exact path="/Nigeria/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyNi" country="ng" countryName="Nigeria"category="technology" pageSize={9}/>} />

              {/* 34) Netherlands */}
              <Route exact path="/Netherlands" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNet" country="nl" countryName="Netherlands" category="general" pageSize={9}/>} />
              <Route exact path="/Netherlands/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessNe" country="nl" countryName="Netherlands"category="buisness" pageSize={9}/>} />
              <Route exact path="/Netherlands/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentNe" country="nl" countryName="Netherlands"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Netherlands/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNe" country="nl" countryName="Netherlands" category="general" pageSize={9}/>} />
              <Route exact path="/Netherlands/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthNe" country="nl" countryName="Netherlands" category="health" pageSize={9}/>} />
              <Route exact path="/Netherlands/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceNe" country="nl" countryName="Netherlands" category="science" pageSize={9}/>} />
              <Route exact path="/Netherlands/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsNe" country="nl" countryName="Netherlands" category="sports" pageSize={9}/>} />
              <Route exact path="/Netherlands/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyNe" country="nl" countryName="Netherlands"category="technology" pageSize={9}/>} />

              {/* 35) Norway */}
              <Route exact path="/Norway" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNor" country="no" countryName="Norway" category="general" pageSize={9}/>} />
              <Route exact path="/Norway/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessNo" country="no" countryName="Norway"category="buisness" pageSize={9}/>} />
              <Route exact path="/Norway/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentNo" country="no" countryName="Norway"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Norway/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNo" country="no" countryName="Norway" category="general" pageSize={9}/>} />
              <Route exact path="/Norway/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthNo" country="no" countryName="Norway" category="health" pageSize={9}/>} />
              <Route exact path="/Norway/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceNo" country="no" countryName="Norway" category="science" pageSize={9}/>} />
              <Route exact path="/Norway/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsNo" country="no" countryName="Norway" category="sports" pageSize={9}/>} />
              <Route exact path="/Norway/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyNo" country="no" countryName="Norway"category="technology" pageSize={9}/>} />

              {/* 36) New-Zealand */}
              <Route exact path="/New-Zealand" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNew" country="nz" countryName="New Zealand" category="general" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessNe" country="nz" countryName="New Zealand"category="buisness" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentNe" country="nz" countryName="New Zealand"category="entertainment" pageSize={9}/>} />
              <Route exact path="/New-Zealand/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalNe" country="nz" countryName="New Zealand" category="general" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthNe" country="nz" countryName="New Zealand" category="health" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceNe" country="nz" countryName="New Zealand" category="science" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsNe" country="nz" countryName="New Zealand" category="sports" pageSize={9}/>} />
              <Route exact path="/New-Zealand/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyNe" country="nz" countryName="New Zealand"category="technology" pageSize={9}/>} />

              {/* 38) Poland */}
              <Route exact path="/Poland" element={<News apiKey={apiKey} setProgress={setProgress} key="generalPol" country="pl" countryName="Poland" category="general" pageSize={9}/>} />
              <Route exact path="/Poland/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessPo" country="pl" countryName="Poland"category="buisness" pageSize={9}/>} />
              <Route exact path="/Poland/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentPo" country="pl" countryName="Poland"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Poland/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalPo" country="pl" countryName="Poland" category="general" pageSize={9}/>} />
              <Route exact path="/Poland/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthPo" country="pl" countryName="Poland" category="health" pageSize={9}/>} />
              <Route exact path="/Poland/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="sciencePo" country="pl" countryName="Poland" category="science" pageSize={9}/>} />
              <Route exact path="/Poland/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsPo" country="pl" countryName="Poland" category="sports" pageSize={9}/>} />
              <Route exact path="/Poland/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyPo" country="pl" countryName="Poland"category="technology" pageSize={9}/>} />

              {/* 39) Portugal */}
              <Route exact path="/Portugal" element={<News apiKey={apiKey} setProgress={setProgress} key="generalPor" country="pt" countryName="Portugal" category="general" pageSize={9}/>} />
              <Route exact path="/Portugal/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessPor" country="pt" countryName="Portugal"category="buisness" pageSize={9}/>} />
              <Route exact path="/Portugal/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentPor" country="pt" countryName="Portugal"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Portugal/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalPor" country="pt" countryName="Portugal" category="general" pageSize={9}/>} />
              <Route exact path="/Portugal/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthPor" country="pt" countryName="Portugal" category="health" pageSize={9}/>} />
              <Route exact path="/Portugal/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="sciencePor" country="pt" countryName="Portugal" category="science" pageSize={9}/>} />
              <Route exact path="/Portugal/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsPor" country="pt" countryName="Portugal" category="sports" pageSize={9}/>} />
              <Route exact path="/Portugal/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyPor" country="pt" countryName="Portugal"category="technology" pageSize={9}/>} />

              {/* 40) Romania */}
              <Route exact path="/Romania" element={<News apiKey={apiKey} setProgress={setProgress} key="generalRom" country="ro" countryName="Romania" category="general" pageSize={9}/>} />
              <Route exact path="/Romania/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessRo" country="ro" countryName="Romania"category="buisness" pageSize={9}/>} />
              <Route exact path="/Romania/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentRo" country="ro" countryName="Romania"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Romania/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalRo" country="ro" countryName="Romania" category="general" pageSize={9}/>} />
              <Route exact path="/Romania/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthRo" country="ro" countryName="Romania" category="health" pageSize={9}/>} />
              <Route exact path="/Romania/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceRo" country="ro" countryName="Romania" category="science" pageSize={9}/>} />
              <Route exact path="/Romania/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsRo" country="ro" countryName="Romania" category="sports" pageSize={9}/>} />
              <Route exact path="/Romania/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyRo" country="ro" countryName="Romania"category="technology" pageSize={9}/>} />
              
              {/* 41) Serbia */}
              <Route exact path="/Serbia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSer" country="rs" countryName="Serbia" category="general" pageSize={9}/>} />
              <Route exact path="/Serbia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSer" country="rs" countryName="Serbia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Serbia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSer" country="rs" countryName="Serbia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Serbia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSer" country="rs" countryName="Serbia" category="general" pageSize={9}/>} />
              <Route exact path="/Serbia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSer" country="rs" countryName="Serbia" category="health" pageSize={9}/>} />
              <Route exact path="/Serbia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSer" country="rs" countryName="Serbia" category="science" pageSize={9}/>} />
              <Route exact path="/Serbia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSer" country="rs" countryName="Serbia" category="sports" pageSize={9}/>} />
              <Route exact path="/Serbia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySer" country="rs" countryName="Serbia"category="technology" pageSize={9}/>} />

              {/* 42) Russia */}
              <Route exact path="/Russia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalRus" country="ru" countryName="Russia" category="general" pageSize={9}/>} />
              <Route exact path="/Russia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessRus" country="ru" countryName="Russia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Russia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentRus" country="ru" countryName="Russia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Russia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalRus" country="ru" countryName="Russia" category="general" pageSize={9}/>} />
              <Route exact path="/Russia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthRus" country="ru" countryName="Russia" category="health" pageSize={9}/>} />
              <Route exact path="/Russia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceRus" country="ru" countryName="Russia" category="science" pageSize={9}/>} />
              <Route exact path="/Russia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsRus" country="ru" countryName="Russia" category="sports" pageSize={9}/>} />
              <Route exact path="/Russia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyRus" country="ru" countryName="Russia"category="technology" pageSize={9}/>} />

              {/* 43) Saudi-Arabia */}
              <Route exact path="/Saudi-Arabia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSau" country="sa" countryName="Saudi Arabia" category="general" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSau" country="sa" countryName="Saudi Arabia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSau" country="sa" countryName="Saudi Arabia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSau" country="sa" countryName="Saudi Arabia" category="general" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSau" country="sa" countryName="Saudi Arabia" category="health" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSau" country="sa" countryName="Saudi Arabia" category="science" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSau" country="sa" countryName="Saudi Arabia" category="sports" pageSize={9}/>} />
              <Route exact path="/Saudi-Arabia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySau" country="sa" countryName="Saudi Arabia"category="technology" pageSize={9}/>} />

              {/* 44) Sweden */}
              <Route exact path="/Sweden" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSwe" country="se" countryName="Sweden" category="general" pageSize={9}/>} />
              <Route exact path="/Sweden/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSwe" country="se" countryName="Sweden"category="buisness" pageSize={9}/>} />
              <Route exact path="/Sweden/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSwe" country="se" countryName="Sweden"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Sweden/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSwe" country="se" countryName="Sweden" category="general" pageSize={9}/>} />
              <Route exact path="/Sweden/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSwe" country="se" countryName="Sweden" category="health" pageSize={9}/>} />
              <Route exact path="/Sweden/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSwe" country="se" countryName="Sweden" category="science" pageSize={9}/>} />
              <Route exact path="/Sweden/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSwe" country="se" countryName="Sweden" category="sports" pageSize={9}/>} />
              <Route exact path="/Sweden/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySwe" country="se" countryName="Sweden"category="technology" pageSize={9}/>} />

              {/* 45) Singapore */}
              <Route exact path="/Singapore" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSin" country="sg" countryName="Singapore" category="general" pageSize={9}/>} />
              <Route exact path="/Singapore/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSin" country="sg" countryName="Singapore"category="buisness" pageSize={9}/>} />
              <Route exact path="/Singapore/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSin" country="sg" countryName="Singapore"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Singapore/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSin" country="sg" countryName="Singapore" category="general" pageSize={9}/>} />
              <Route exact path="/Singapore/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSin" country="sg" countryName="Singapore" category="health" pageSize={9}/>} />
              <Route exact path="/Singapore/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSin" country="sg" countryName="Singapore" category="science" pageSize={9}/>} />
              <Route exact path="/Singapore/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSin" country="sg" countryName="Singapore" category="sports" pageSize={9}/>} />
              <Route exact path="/Singapore/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySin" country="sg" countryName="Singapore"category="technology" pageSize={9}/>} />

              {/* 46) Slovenia */}
              <Route exact path="/Slovenia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSlo" country="si" countryName="Slovenia" category="general" pageSize={9}/>} />
              <Route exact path="/Slovenia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSlo" country="si" countryName="Slovenia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Slovenia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSlo" country="si" countryName="Slovenia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Slovenia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSlo" country="si" countryName="Slovenia" category="general" pageSize={9}/>} />
              <Route exact path="/Slovenia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSlo" country="si" countryName="Slovenia" category="health" pageSize={9}/>} />
              <Route exact path="/Slovenia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSlo" country="si" countryName="Slovenia" category="science" pageSize={9}/>} />
              <Route exact path="/Slovenia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSlo" country="si" countryName="Slovenia" category="sports" pageSize={9}/>} />
              <Route exact path="/Slovenia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySlo" country="si" countryName="Slovenia"category="technology" pageSize={9}/>} />

              {/* 47) Slovakia */}d
              <Route exact path="/Slovakia" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSlo" country="sk" countryName="Slovakia" category="general" pageSize={9}/>} />
              <Route exact path="/Slovakia/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSlo" country="sk" countryName="Slovakia"category="buisness" pageSize={9}/>} />
              <Route exact path="/Slovakia/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSlo" country="sk" countryName="Slovakia"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Slovakia/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSo" country="sk" countryName="Slovakia" category="general" pageSize={9}/>} />
              <Route exact path="/Slovakia/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSlo" country="sk" countryName="Slovakia" category="health" pageSize={9}/>} />
              <Route exact path="/Slovakia/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSlo" country="sk" countryName="Slovakia" category="science" pageSize={9}/>} />
              <Route exact path="/Slovakia/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSlo" country="sk" countryName="Slovakia" category="sports" pageSize={9}/>} />
              <Route exact path="/Slovakia/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySlo" country="sk" countryName="Slovakia"category="technology" pageSize={9}/>} />

              {/* 48) Thailand */}
              <Route exact path="/Thailand" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTha" country="th" countryName="Thailand" category="general" pageSize={9}/>} />
              <Route exact path="/Thailand/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessTha" country="th" countryName="Thailand"category="buisness" pageSize={9}/>} />
              <Route exact path="/Thailand/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentTha" country="th" countryName="Thailand"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Thailand/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTha" country="th" countryName="Thailand" category="general" pageSize={9}/>} />
              <Route exact path="/Thailand/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthTha" country="th" countryName="Thailand" category="health" pageSize={9}/>} />
              <Route exact path="/Thailand/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceTha" country="th" countryName="Thailand" category="science" pageSize={9}/>} />
              <Route exact path="/Thailand/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsTha" country="th" countryName="Thailand" category="sports" pageSize={9}/>} />
              <Route exact path="/Thailand/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyTha" country="th" countryName="Thailand"category="technology" pageSize={9}/>} />

              {/* 49) Turkiye */}
              <Route exact path="/Turkiye" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTur" country="tr" countryName="Turkiye" category="general" pageSize={9}/>} />
              <Route exact path="/Turkiye/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessTur" country="tr" countryName="Turkiye"category="buisness" pageSize={9}/>} />
              <Route exact path="/Turkiye/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentTur" country="tr" countryName="Turkiye"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Turkiye/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTur" country="tr" countryName="Turkiye" category="general" pageSize={9}/>} />
              <Route exact path="/Turkiye/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthTur" country="tr" countryName="Turkiye" category="health" pageSize={9}/>} />
              <Route exact path="/Turkiye/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceTur" country="tr" countryName="Turkiye" category="science" pageSize={9}/>} />
              <Route exact path="/Turkiye/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsTur" country="tr" countryName="Turkiye" category="sports" pageSize={9}/>} />
              <Route exact path="/Turkiye/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyTur" country="tr" countryName="Turkiye"category="technology" pageSize={9}/>} />

              {/* 50) Taiwane */}
              <Route exact path="/Taiwane" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTai" country="tr" countryName="Taiwane" category="general" pageSize={9}/>} />
              <Route exact path="/Taiwane/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessTai" country="tr" countryName="Taiwane"category="buisness" pageSize={9}/>} />
              <Route exact path="/Taiwane/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentTai" country="tr" countryName="Taiwane"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Taiwane/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalTai" country="tr" countryName="Taiwane" category="general" pageSize={9}/>} />
              <Route exact path="/Taiwane/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthTai" country="tr" countryName="Taiwane" category="health" pageSize={9}/>} />
              <Route exact path="/Taiwane/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceTai" country="tr" countryName="Taiwane" category="science" pageSize={9}/>} />
              <Route exact path="/Taiwane/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsTai" country="tr" countryName="Taiwane" category="sports" pageSize={9}/>} />
              <Route exact path="/Taiwane/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyTai" country="tr" countryName="Taiwane"category="technology" pageSize={9}/>} />

              {/* 51) Ukraine */}
              <Route exact path="/Ukraine" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUkr" country="ua" countryName="Ukraine" category="general" pageSize={9}/>} />
              <Route exact path="/Ukraine/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessUkr" country="ua" countryName="Ukraine"category="buisness" pageSize={9}/>} />
              <Route exact path="/Ukraine/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentUkr" country="ua" countryName="Ukraine"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Ukraine/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUkr" country="ua" countryName="Ukraine" category="general" pageSize={9}/>} />
              <Route exact path="/Ukraine/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthUkr" country="ua" countryName="Ukraine" category="health" pageSize={9}/>} />
              <Route exact path="/Ukraine/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceUkr" country="ua" countryName="Ukraine" category="science" pageSize={9}/>} />
              <Route exact path="/Ukraine/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsUkr" country="ua" countryName="Ukraine" category="sports" pageSize={9}/>} />
              <Route exact path="/Ukraine/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyUkr" country="ua" countryName="Ukraine"category="technology" pageSize={9}/>} />

              {/* 52) US */}
              <Route exact path="/US" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUS" country="us" countryName="US" category="general" pageSize={9}/>} />
              <Route exact path="/US/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessUS" country="us" countryName="US"category="buisness" pageSize={9}/>} />
              <Route exact path="/US/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentUS" country="us" countryName="US"category="entertainment" pageSize={9}/>} />
              <Route exact path="/US/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalUS" country="us" countryName="US" category="general" pageSize={9}/>} />
              <Route exact path="/US/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthUS" country="us" countryName="US" category="health" pageSize={9}/>} />
              <Route exact path="/US/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceUS" country="us" countryName="US" category="science" pageSize={9}/>} />
              <Route exact path="/US/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsUS" country="us" countryName="US" category="sports" pageSize={9}/>} />
              <Route exact path="/US/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyUS" country="us" countryName="US"category="technology" pageSize={9}/>} />

              {/* 53) Venezuela */}
              <Route exact path="/Venezuela" element={<News apiKey={apiKey} setProgress={setProgress} key="generalVen" country="ve" countryName="Venezuela" category="general" pageSize={9}/>} />
              <Route exact path="/Venezuela/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessVen" country="ve" countryName="Venezuela"category="buisness" pageSize={9}/>} />
              <Route exact path="/Venezuela/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentVen" country="ve" countryName="Venezuela"category="entertainment" pageSize={9}/>} />
              <Route exact path="/Venezuela/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalVen" country="ve" countryName="Venezuela" category="general" pageSize={9}/>} />
              <Route exact path="/Venezuela/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthVen" country="ve" countryName="Venezuela" category="health" pageSize={9}/>} />
              <Route exact path="/Venezuela/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceVen" country="ve" countryName="Venezuela" category="science" pageSize={9}/>} />
              <Route exact path="/Venezuela/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsVen" country="ve" countryName="Venezuela" category="sports" pageSize={9}/>} />
              <Route exact path="/Venezuela/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologyVen" country="ve" countryName="Venezuela"category="technology" pageSize={9}/>} />

              {/* 54) South-Africa */}
              <Route exact path="/South-Africa" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSOA" country="za" countryName="South Africa" category="general" pageSize={9}/>} />
              <Route exact path="/South-Africa/Buisness" element={<News apiKey={apiKey} setProgress={setProgress} key="buisnessSA" country="za" countryName="South Africa"category="buisness" pageSize={9}/>} />
              <Route exact path="/South-Africa/Entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainmentSA" country="za" countryName="South Africa"category="entertainment" pageSize={9}/>} />
              <Route exact path="/South-Africa/General" element={<News apiKey={apiKey} setProgress={setProgress} key="generalSA" country="za" countryName="South Africa" category="general" pageSize={9}/>} />
              <Route exact path="/South-Africa/Health" element={<News apiKey={apiKey} setProgress={setProgress} key="healthSA" country="za" countryName="South Africa" category="health" pageSize={9}/>} />
              <Route exact path="/South-Africa/Science" element={<News apiKey={apiKey} setProgress={setProgress} key="scienceSA" country="za" countryName="South Africa" category="science" pageSize={9}/>} />
              <Route exact path="/South-Africa/Sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sportsSA" country="za" countryName="South Africa" category="sports" pageSize={9}/>} />
              <Route exact path="/South-Africa/Technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technologySA" country="za" countryName="South Africa"category="technology" pageSize={9}/>} />

              
            </Routes>
          </Router>
        </div>
    )
}

export default App;
