import{a as m,S as d,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="53601534-4242f4726582a914ce6310b57";function y(o){const r={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:r}).then(a=>a.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
          />
        </a>
        <ul class="info">
          <li><span>Likes</span>${t}</li>
          <li><span>Views</span>${i}</li>
          <li><span>Comments</span>${p}</li>
          <li><span>Downloads</span>${f}</li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){c.innerHTML=""}function w(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",E);function E(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search term.",position:"topRight"});return}S(),w(),y(r).then(a=>{l();const{hits:s}=a;if(!s||s.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s)}).catch(()=>{l(),n.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{o.currentTarget.reset()})}
//# sourceMappingURL=index.js.map
