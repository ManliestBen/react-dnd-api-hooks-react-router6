import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import ClassList from '../ClassList/ClassList';
import ClassDetails from '../ClassDetails/ClassDetails';
import MonsterList from '../MonsterList/MonsterList'
import MonsterDetails from '../MonsterDetails/MonsterDetails'
import SpellSearch from '../SpellSearch/SpellSearch'
import SpellDetails from '../SpellDetails/SpellDetails'


import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/class-list", name: "Class List"}, 
    {url: "/monster-list", name: "Scary Monsters"}, 
    {url: "/spell-search", name: "Search for Spells"}
  ])

  return (
    <>
      <NavBar navItems={navItems}/>
      <Routes>
        <Route path="/class-list" element={<ClassList />}/>
        <Route path="/class" element={<ClassDetails />}/>
        <Route path="/monster-list" element={<MonsterList />}/>
        <Route path="/monster" element={<MonsterDetails />}/>
        <Route path="/spell-search" element={<SpellSearch />}/>
        <Route path="/spell/:name" element={<SpellDetails />}/>
      </Routes>
    </>
  );
}

export default App;
