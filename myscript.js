// ПРОГРЕСС БАР .........................................

let progressBar = document.querySelector(".js-pr-line");

document.onscroll = function () {
  let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
  // window.scrollY - на сколько прикрутили вниз
  // document.body.clientHeight - высота body 
  // window.innerHeight - высота окна просмотра

  progressBar.style.width = progressLine + "%";

  // console.log(WindowH);
}

// ИНТЕГРАЦИЯ ПОСТОВ ....................................

VK.Widgets.Post('vk_post_-210924089_390', -210924089, 390, 'huiHNAmNtzM3DRoTiWBon_lF1R8x');
VK.Widgets.Post('vk_post_-210924089_361', -210924089, 361, 'bdp7VxYMcEuh79Tiwuj6RSRxM-me');
VK.Widgets.Post('vk_post_-210924089_368', -210924089, 368, 'uY_Mqj7C2NV5qNKRCqB1RGcCupKd');
VK.Widgets.Post('vk_post_-210924089_358', -210924089, 358, 'tJxlMBGwuv6BPVMy9UH90Pwkso47');
VK.Widgets.Post('vk_post_-210924089_347', -210924089, 347, 'cdn-ACwqYxNnPhqj1YGJO45uGR6l');
VK.Widgets.Post('vk_post_-210924089_338', -210924089, 338, '_KK8We1NaTDu8vA6rOeDImV5GqPA');
VK.Widgets.Post('vk_post_-210924089_336', -210924089, 336, 'Jhmb5U5worMODJUqzg4qjyKsfE8r');
VK.Widgets.Post('vk_post_-210924089_334', -210924089, 334, '9_o5hRdFOli6jjzirpLTHw4IiMPL');
VK.Widgets.Post('vk_post_-210924089_332', -210924089, 332, 'EOrctJJlpRg0_iHrllM96xLBB9To');
VK.Widgets.Post('vk_post_-210924089_299', -210924089, 299, '-LhZ054Gd9deSeLvRHEX4i2pq8Yv');

