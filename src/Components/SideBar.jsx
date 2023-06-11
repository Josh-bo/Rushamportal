import React from 'react';
import { Link } from "react-router-dom";

const SideBar = () => {
     // JavaScript to handle the dropdown menu toggle
  const dropdowns = document.getElementsByClassName('dropdown');

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      this.classList.toggle('active');
      const dropdownContent = this.querySelector('.dropdown-content');
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  }

  return (
    <>
        <div>
            
        </div>
    </>
  );
}

export default SideBar;
