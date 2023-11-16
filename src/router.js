import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home"
import Payment from "./views/Payment"
import Completion from "./views/Completion"
import TermsConditions from "./views/TermsConditions"
import JobSearch from "./views/JobSearch"
import AboutAJ from "./views/AboutAJ"
import Employer from "./views/Employer"
import Category from "./views/Category"
import Faculty from "./views/Faculty"
import Position from "./views/Position"
import Position2 from "./views/Position2"
import HR from "./views/HR"
import HR2 from "./views/HR2"
import Lecturer from "./views/Lecturer"
import Lecturer2 from "./views/Lecturer2"
import Cities from "./views/Cities"
import UKpositions from "./views/UKpositions"
import NewZealandPositions from "./views/NewZealandPositions"
import MiddleEastPositions from "./views/MiddleEastPositions"
import SouthAmericaPositions from "./views/SouthAmericaPositions"
import IndiaPositions from "./views/IndiaPositions"
import EuropePositions from "./views/EuropePositions"
import CanadaPositions from "./views/CanadaPositions"
import AfricaPositions from "./views/AfricaPositions"
import AsiaPositions from "./views/AsiaPositions"
import Industry from "./views/Industry"
import Industry2 from "./views/Industry2"
import Executive from "./views/Executive"
import Executive2 from "./views/Executive2"
import Admin from "./views/Admin"
import Adelaide from "./views/Adelaide"
import Admin2 from "./views/Admin2"
import CareerAdvice from "./views/CareerAdvice"
import Careeradvice2 from "./views/Careeradvice2"
import Student from "./views/Student"
import Students from "./views/Students"
import PostJob from "./views/PostJob"
import Rankings from "./views/Rankings"
import FAQ from "./views/FAQ"
import ContactUs from "./views/ContactUs"
import DiversayStatement from "./views/DiversayStatement"
import FindEmployers from "./views/FindEmployers"
import Australia from "./views/Australia"
import India from "./views/India"
import Asia from "./views/Asia"
import Africa from "./views/Africa"
import Europe from "./views/Europe"
import SouthAmerica from "./views/SouthAmerica"
import MiddleEast from "./views/MiddleEast"
import Canada from "./views/Canada"
import UK from "./views/UK"
import NewZealand from "./views/NewZealand"
import USA from "./views/USA"
import SiteMap from "./views/SiteMap"
import BostonCollege from "./views/BostonCollege"
import NortheasternUniversity from "./views/NortheasternUniversity"
import MassachusettsAmherst from "./views/MassachusettsAmherst"
import TuftsUniversity from "./views/TuftsUniversity"
import BostonUniversity from "./views/BostonUniversity"
import QUT from "./views/QUT"
import Layout from './components/Layout'
import JobDetailPage from "./views/JobDetailPage";
import Research from "./views/Research"
import Research2 from "./views/Research2"
import Professor from "./views/Professor"
import Professor2 from "./views/Professor2"
import Online from "./views/Online"
import FAQaustralia from "./views/FAQaustralia"
import FAQresearch from "./views/FAQresearch"
import FAQstudent from "./views/FAQstudent"
import FAQusa from "./views/FAQusa"
import LecturerUSA from "./views/LecturerUSA"
import ResearchUSA from "./views/ResearchUSA"
import ProfessorUSA from "./views/ProfessorUSA"
import ExecutiveUSA from "./views/ExecutiveUSA"
import AdminUSA from "./views/AdminUSA"
import HRUSA from "./views/HRUSA"
import StudentsUSA from "./views/StudentsUSA"
import LecturerAustralia from "./views/LecturerAustralia"
import ResearchAustralia from "./views/ResearchAustralia"
import ProfessorAustralia from "./views/ProfessorAustralia"
import ExecutiveAustralia from "./views/ExecutiveAustralia"
import AdminAustralia from "./views/AdminAustralia"
import HRAustralia from "./views/HRAustralia"
import IndigenousAustralia from "./views/IndigenousAustralia"
import StudentsAustralia from "./views/StudentsAustralia"
import Scroll2Top from "./utils/Scroll2Top"
import Victoria from "./views/Victoria" 
import Sydney from "./views/Sydney" 
import Perth from "./views/Perth" 
import Queensland from "./views/Queensland" 
import NSW from "./views/NSW" 
import Darwin from "./views/Darwin" 
import Tasmania from "./views/Tasmania" 
import WesternAustralia from "./views/WesternAustralia"  
import SouthAustralia from "./views/SouthAustralia" 
import NorthernTerritory from "./views/NorthernTerritory"    
import Canberra from "./views/Canberra"   
import GoldCoast from "./views/GoldCoast"   
import Brisbane from "./views/Brisbane"  
import Melbourne from "./views/Melbourne"
    <BrowserRouter>
      <Scroll2Top>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route exact path='/Global' element={<Navigate to='/' replace />} />
            <Route exact path='/' index element={<Home />} />
            <Route exact path='/home/' element={<Home />} />
            <Route exact path='/payment/:id' element={<Payment />} />
            <Route exact path='/completion/' element={<Completion />} />
            <Route exact path='/jobs/' element={<JobSearch />} />
            <Route exact path='/jobs/:name?' element={<JobSearch />} />
            <Route exact path='/jobs/:name/:id?/' element={<JobDetailPage />} />
            <Route exact path='/employers/:name/:id?' element={<Employer />} />
            <Route exact path='/faculty/' element={<Faculty />} />
            <Route exact path='/QUT/' element={<QUT />} />
            <Route exact path='/faculty/:category?' element={<Category />} />
            
            <Route exact path='/:position?' element={<Position />} />
            <Route exact path='/cities/:cities?' element={<Cities />} />
            <Route exact path='/industry/:industry?' element={<Industry />} />

            <Route exact path='/job-type/' element={<Position2 />} />
            <Route exact path='/hr/:hr?' element={<HR />} />
        
            <Route exact path='/UK/:ukpositions?' element={<UKpositions />} />
            <Route exact path='/Asia/:asiapositions?' element={<AsiaPositions />} />
            <Route exact path='/Africa/:africapositions?' element={<AfricaPositions />} />
            <Route exact path='/Canada/:canadapositions?' element={<CanadaPositions />} />
            <Route exact path='/Europe/:europepositions?' element={<EuropePositions />} />
            <Route exact path='/India/:indiapositions?' element={<IndiaPositions />} />
            <Route exact path='/South-America/:southamericapositions?' element={<SouthAmericaPositions />} />
            <Route exact path='/Middle-East/:middleeastpositions?' element={<MiddleEastPositions />} />
            <Route exact path='/New-Zealand/:newzealandpositions?' element={<NewZealandPositions />} />
            <Route exact path='/UK/:ukpositions?' element={<UKpositions />} />
            <Route exact path='/hr/' element={<HR2 />} />
            <Route exact path='/online/' element={<Online />} />
            <Route exact path='/research/:research?' element={<Research />} />
            <Route exact path='/research/' element={<Research2 />} />
            <Route exact path='/professor/:professor?' element={<Professor />} />
            <Route exact path='/professor/' element={<Professor2 />} />
            <Route exact path='/lecturer/:lecturer?' element={<Lecturer />} />
            <Route exact path='/lecturer/' element={<Lecturer2 />} />
            <Route exact path='/USA/lecturer/' element={<LecturerUSA />} />
            <Route exact path='/USA/research/' element={<ResearchUSA />} />
            <Route exact path='/USA/professor/' element={<ProfessorUSA />} />
            <Route exact path='/USA/executive/' element={<ExecutiveUSA />} />
            <Route exact path='/USA/admin/' element={<AdminUSA />} />
            <Route exact path='/USA/hr/' element={<HRUSA />} />
            <Route exact path='/USA/student/' element={<StudentsUSA />} />
            <Route exact path='/Australia/lecturer/' element={<LecturerAustralia />} />
            <Route exact path='/Australia/research/' element={<ResearchAustralia />} />
            <Route exact path='/Australia/professor/' element={<ProfessorAustralia />} />
            <Route exact path='/Australia/executive/' element={<ExecutiveAustralia />} />
            <Route exact path='/Australia/admin/' element={<AdminAustralia />} />
            <Route exact path='/Australia/hr/' element={<HRAustralia />} />
            <Route exact path='/Australia/student/' element={<StudentsAustralia />} />
            <Route exact path='/Australia/indigenous/' element={<IndigenousAustralia />} />
          
            <Route exact path='/industry/' element={<Industry2 />} />
            <Route exact path='/executive/:executive?' element={<Executive />} />
            <Route exact path='/executive/' element={<Executive2 />} />
            <Route exact path='/admin/:admin?' element={<Admin />} />
            <Route exact path='/admin/' element={<Admin2 />} />
            <Route exact path='/adelaide/' element={<Adelaide />} />
            <Route exact path='/school-career-advice/:careerAdvice?' element={<CareerAdvice />} />
            <Route exact path='/school-career-advice/' element={<Careeradvice2 />} />
            <Route exact path='/student/:student?' element={<Student />} />
            <Route exact path='/student/' element={<Students />} />
            <Route exact path='/school-pricing/' element={<PostJob />} />
            <Route exact path='/the-university-rankings/' element={<Rankings />} />
            <Route exact path='/about/' element={<AboutAJ />} />
            <Route exact path='/about/term-of-use/' element={<TermsConditions />} />
            <Route exact path='/about/diversity-statement/' element={<DiversayStatement />} />
            <Route exact path='/faq' element={<FAQ />} />
            <Route exact path='/contact-us/' element={<ContactUs />} />
            <Route exact path='/employers/' element={<FindEmployers />} />
            <Route exact path='/sitemap/' element={<SiteMap />} />
            <Route exact path='/Australia/faq/' element={<FAQaustralia />} />
            <Route exact path='/research/faq/' element={<FAQresearch />} />
            <Route exact path='/student/faq/' element={<FAQstudent />} />
            <Route exact path='/USA/faq/' element={<FAQusa />} />
            <Route exact path='/company/3604/boston-college/' element={<BostonCollege />} />
            <Route exact path='/company/3285/northeastern-university/' element={<NortheasternUniversity />} />
            <Route exact path='/company/3396/university-of-massachusetts-amherst/' element={<MassachusettsAmherst />} />
            <Route exact path='/company/3460/tufts-university/' element={<TuftsUniversity />} />
            <Route exact path='/company/3190/boston-university/' element={<BostonUniversity />} />
            <Route exact path='/queensland-university-of-technology/' element={<QUT />} />
            <Route exact path='/Australia/' element={<Australia />} />
            <Route exact path='/USA/' element={<USA />} />
            <Route exact path='/Asia/' element={<Asia />} />
            <Route exact path='/Africa/' element={<Africa />} />
            <Route exact path='/India/' element={<India />} />
            <Route exact path='/UK/' element={<UK />} />
            <Route exact path='/United-Kingdom/' element={<UK />} />
            <Route exact path='/New-Zealand/' element={<NewZealand />} />
            <Route exact path='/South-America/' element={<SouthAmerica />} />
            <Route exact path='/Canada/' element={<Canada />} />
            <Route exact path='/Europe/' element={<Europe />} />
            <Route exact path='/Middle-East/' element={<MiddleEast />} />
            <Route exact path='/Victoria/' element={<Victoria />} />  
            <Route exact path='/Sydney/' element={<Sydney />} /> 
            <Route exact path='/Perth/' element={<Perth />} /> 
            <Route exact path='/Queensland/' element={<Queensland />} />   
            <Route exact path='/NSW/' element={<NSW />} /> 
            <Route exact path='/Darwin/' element={<Darwin />} /> 
            <Route exact path='/Tasmania/' element={<Tasmania />} />   
            <Route exact path='/WesternAustralia/' element={<WesternAustralia />} />  
            <Route exact path='/SouthAustralia/' element={<SouthAustralia />} />      
            <Route exact path='/NorthernTerritory/' element={<NorthernTerritory />} />   
            <Route exact path='/Canberra/' element={<Canberra />} />    
            <Route exact path='/GoldCoast/' element={<GoldCoast />} />    
            <Route exact path='/ Brisbane/' element={< Brisbane />} />    
            <Route exact path='/  Melbourne/' element={<  Melbourne />} />  
            {/* <Route path='/:name' element={<Region />} /> */}
          </Route>
        </Routes>
      </Scroll2Top>
    </BrowserRouter>
  )
}
export default AppRouter