import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <nav className={`fixed top-0 left-0 h-full w-64 text-white p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-secondary`}>
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">
          <Link className="btn btn-ghost w-full text-white" to="/">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link className="btn btn-ghost w-full text-white" to="/employees">ຂໍ້ມູນພະນັກງານ</Link>
        </li>
        <li className="mb-2">
          <Link className="btn btn-ghost w-full text-white" to="/">ຂໍ້ມູນວຸດທິການສຶກສາ</Link>
        </li>
        <li className="mb-2">
          <Link className="btn btn-ghost w-full text-white" to="/">ຂໍ້ມູນຄອບຄົວ</Link>
        </li>
        <li className="mb-2">
          <Link className="btn btn-ghost w-full text-white" to="/">ອົງການຈັດຕັ້ງ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
