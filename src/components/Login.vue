<template>
    <button class="my-Login"><slot></slot></button>
  </template>
  
  <script>
  export default {
    name: 'my-Login'
  };
  </script>
  
  <style scoped>
  .my-Login {
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