(()=>{
	const main = document.getElementsByClassName('main')[0];
	const start = document.getElementsByClassName("start")[0];
	const end = document.getElementsByClassName("end")[0];
	const source = document.getElementsByClassName("result")[0];
	const restart = document.getElementsByClassName("restart")[0];
	const buttons = document.getElementsByTagName('button');
	const color = ['#0ff','#f00','#ff0','#0f0','#f0f','#00f'];
	let speed = 5;
	let timer = null;
	let result  = 0;
	const init = function(){
		start.onclick = ()=>{
			start.style.display = 'none';
			move();
		}
		bindEvent();
	}
	const creatrRows = function(){
		const rowWrapper = document.createElement('div');
		rowWrapper.className = "row";
		for(let i = 0;i<4;i++){
			const item = document.createElement('div');
			rowWrapper.appendChild(item);
		}
		if(main.childNodes.length === 0){
			main.appendChild(rowWrapper);
		}else{
			main.insertBefore(rowWrapper,main.childNodes[0])
		}
		const index1 =  Math.floor(Math.random()*4);
		const index2 = Math.floor(Math.random()*(color.length));
		main.childNodes[0].childNodes[index1].setAttribute("class","i");
		main.childNodes[0].childNodes[index1].style.backgroundColor = color[index2];
	}

	const move = function(){
		timer = setInterval(()=>{
			const step = main.offsetTop +speed;
			main.style.top = `${step}px`;
			if(main.offsetTop >= 0){
				creatrRows()
				main.style.top = `-150px`;
			}
			const length = main.childNodes.length;
			if(length === 6){
				for(let i =0;i<4;i++){
					if(main.childNodes[length -1].children[i].classList.contains('i')){
						endGame();
					}
				}
				main.removeChild(main.childNodes[length - 1]);
			}
		},20)
	}

	const bindEvent = function(){
		main.onclick = e=>{
			const tag = e.target;
			if(tag.className === 'i'){
				tag.style.backgroundColor = "#bbb";
				tag.classList.remove('i');
				result++;
			}else{
				endGame();
			}
			if(result % 10 === 0){
				speed++;
			}
		}
		buttons[0].onclick = ()=>{speed = 1};
		buttons[1].onclick = ()=>{speed = 3};
		buttons[2].onclick = ()=>{speed = 5};
		buttons[3].onclick = ()=>{
			if(speed>0){
				speed--;
			}
		};
		buttons[4].onclick = ()=>{speed++};
	}

	const endGame = function(){
		end.style.display = 'block';
		source.innerHTML = `本次得分: ${result}`;
		clearInterval(timer);
		main.onclick = "";
		restart.onclick = ()=>{
			window.location.reload(true);
		}
	}

	init();
})()