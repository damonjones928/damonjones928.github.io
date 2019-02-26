// JavaScript Document
  document.addEventListener('click', _handleMouseClick,true);
            document.addEventListener('keydown',_keydown,true);
            function _handleMouseClick(event){
                if(event.detail){
                    document.getElementsByTagName("body")[0].classList.add("disableOutline");
                }
            }
            function _keydown(e){
                document.getElementsByTagName("body")[0].classList.remove("disableOutline");
            }
