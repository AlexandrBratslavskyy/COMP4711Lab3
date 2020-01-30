const artistlist = document.getElementById("artist-container"),
      addform = document.getElementById("addform");
      searchbox = document.getElementById("search-box");

const Delete = (artist) => artistlist.removeChild(artist);

const Add = () => {
  searchbox.style.height = "250px";
  addform.style.display = "block";
}

const AddArtist = (f) => {
  let cont = document.createElement("div"),
      img = document.createElement("img"),
      btn = document.createElement("button"),
      indiv = document.createElement("div"),
      h3 = document.createElement("h3"),
      p = document.createElement("p");
  
  
  h3.innerHTML = f.children[0].value;
  p.innerHTML = f.children[1].value;
  img.src = f.children[2].value;

  cont.className = "artist bordering";

  btn.className = "delete";
  btn.onclick = () => Delete(cont);
  btn.innerHTML = "Delete";

  indiv.className = "artist-info";

  indiv.appendChild(h3);
  indiv.appendChild(p);

  cont.appendChild(img);
  cont.appendChild(btn);
  cont.appendChild(indiv);

  //artistlist.appendChild(cont);
  artistlist.insertBefore(cont, artistlist.firstChild);

  addform.style.display = "none";
  f.children[0].value = f.children[1].value = f.children[2].value = "";
  searchbox.style.height = "100px";
}