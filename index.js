const template = document.createElement('template');

template.innerHTML = `
<style>
.header {
  overflow: hidden;
  padding: 20px 10px;
}

.header a {
  
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: orange;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

a:link, a:visited {
	text-decoration: none;
}

a:hover {

  background-color: #ddd;
  color: orange;
}

</style>
`;

document.body.appendChild(template.content);
