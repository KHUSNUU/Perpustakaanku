<template>
    <button class="my-Home"><slot></slot></button>
  </template>
  
  <script>
  export default {
    name: 'my-Home'
  };
  </script>
  
  <style scoped>
  .my-Home {
    background-color: #3498db;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  </style>