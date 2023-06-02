import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { data } from './data.js';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import NavSearch from './NavSearch';
import Detail from './Detail.js';
import MainCarousel from './MainCarousel';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import CardList from './CardList';
import { useNavigate } from 'react-router-dom'
import More from './pages/More';
import MapTest from './components/map/MapTest'
import axios from 'axios';
import { useEffect } from 'react';
import ImageCard from './ImageCard';
import MyPage from './pages/MyPage';

// 채팅 관련 import
import { ChakraProvider, theme } from "@chakra-ui/react";
import Chatgpt from "./pages/chatgpt/Chatgpt";


// 게시판 관련 import 
import Header from './components/Header';
import SignUp from "./pages/sign-up/SignUp";
import Login from "./pages/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import BoardList from './pages/board-list/BoardList';
import Board from './pages/board/Board';
import MyBoardList from "./pages/myboard-list/MyBoardList";
import AddBoard from "./pages/add-board/AddBoard";
import EditBoard from "./pages/edit-board/EditBoard";




function App() {
 

  const [travelArr, setTravelArr] = useState([])
  
  const navigate = useNavigate()
  const location = useLocation();

  const goToMyPage = ()=> {
      navigate("/MyPage")
  }
  const goToMore = ()=> {
    navigate("/more")
  }

  const goToMapTest =()=>{
    navigate("/MapTest")
  }

  const goToBoard =()=> {
    navigate("/board-list") 
  }

  const goToChat =()=>{
    navigate("/chatgpt")
  }

  const goToLogin =()=> {
    navigate("/login")
  }

  
  const goToLogout =()=> {
  
    alert("로그아웃 되었습니다!"); 
     navigate("/")
  }


  return (
    <div className="App">
     
      {/* ------------Navbar------------- */}
      <Navbar variant="white" expand="lg" bg="white" className='navbar-color'>
      <Container fluid className='navbar-color'>
        <div className='navbar-color'><Navbar.Brand className='match-margin navbar-color'><Link to='/' className='link-home'>떠나 Match</Link></Navbar.Brand></div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
        
         <Header/>

          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=""
              menuVariant="dark"
            > 
              <NavDropdown.Item href="#action/3.1" onClick={goToMore}>여행지 보기</NavDropdown.Item>
            <NavDropdown.Item href="/board-list" onClick={goToBoard}>
                여행 후기 게시판
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={goToChat}>챗봇 여행지 추천</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={goToMapTest}>주변 여행지 추천</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={goToMyPage}>
                마이페이지
              </NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5" onClick={goToLogin}>로그인</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={goToLogout}>로그아웃</NavDropdown.Item>
            </NavDropdown>

            {/* -------검색창------ */}
            <Routes>
            <Route path='/' element={<NavSearch/>} />
            </Routes>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* ------------------------------------------ */}

      <Routes>

        
        <Route 
        path='/' element={<div>
            <>
              <div className='main-bg'><MainCarousel/></div>
            </>  
          {/* ------------------------------------------ */}
          <div className='container'>
            <div className='row'>
          
          </div>
        </div>

        {/* -------카드리스트 세개와 더보기 -------------- */}
          <CardList/>

          <>
                <div className='container'>
                  <div className='row'>
                    {
                      
                    }
                  </div>
                </div>
          </>


      
        </div>}/>

        <Route path="/more" element={<More/>}/>
        <Route path='/MyPage' element={<MyPage/>}/>
        <Route path='/MapTest' element={<MapTest/>}/>
        <Route path="/board-list" element={<BoardList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route
          path="/add-board"
          element={
            <PrivateRoute path="/add-board" component={AddBoard}/>
          }
        />
        <Route
          path="/myboard-list"
          element={
            // 쿼리 파라미터가 존재하므로 전체 url을 PrivateRoute에 넘겨준다 `${location.pathname}`
            <PrivateRoute path={`${location.pathname}`} component={MyBoardList}/>
          }
        />
        <Route path="/board/:board_id" element={<Board/>}/>
        <Route
          path="/edit-board/:board_id"
          element={
            // URI 파라미터가 존재하므로 전체 url을 PrivateRoute에 넘겨준다
            <PrivateRoute path={`${location.pathname}`} component={EditBoard}/>
          }
        />

        <Route path="/more" element={<More/>}/>

        <Route path="/chatgpt" element={<ChakraProvider theme={theme}>
<Chatgpt />
</ChakraProvider> }/>
      
      </Routes>
        
    </div>
  );
}

//  <ChakraProvider theme={theme}>
// <Chatgpt />
// </ChakraProvider> 

// function Menu(props) {
//   return (
//     <div className="col-md-4">
//       <img src={"https://codingapple1.github.io/shop/shoes" + props.im + ".jpg"} width="80%" />
//       <h4>{props.shoes.title}</h4>
//       <p>{props.shoes.content}</p>
//       <p>{props.shoes.price}</p>

//     </div>
//   )
// }

export default App;

