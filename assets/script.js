const modal = document.getElementById('downloadModal');
const downloadBtn = document.getElementById('downloadBtn');
const closeModal = document.getElementById('closeModal');

if(downloadBtn){
    downloadBtn.addEventListener('click', function(e){
        e.preventDefault();
        modal.classList.add('show');
    });
}

if(closeModal){
    closeModal.addEventListener('click', function(){
        modal.classList.remove('show');
    });
}

if(modal){
    modal.addEventListener('click', function(e){
        if(e.target === modal){
            modal.classList.remove('show');
        }
    });
}