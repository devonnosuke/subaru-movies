
function ambilSemuaData() {
	$('#daftar-menu').html("");
	$.getJSON('data/pizza.json', function (data) {
		let menu = data.menu;
		
		$.each(menu, function (i, data) {
			$('#daftar-menu').append('<div class="col-md-4"><div class="card"><img src="img/menu/'+data.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><p class="card-text">Rp. '+data.harga+',-</p><a href="#" class="btn btn-primary">Pasan Sekarang</a></div></div></div>');
		});
	});
}

ambilSemuaData();

$('.nav-link').click( function () {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();

	$('h1').html(kategori);

	if (kategori == 'All Menu') {
		ambilSemuaData();
		return;
	}

	$.getJSON('data/pizza.json', function (data){
		let menu = data.menu;
		let content = "";

		$.each(menu, function (i, data) {
			if (data.kategori == kategori.toLowerCase()) {
				content += '<div class="col-md-4"><div class="card"><img src="img/menu/'+data.gambar+'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><p class="card-text">Rp. '+data.harga+',-</p><a href="#" class="btn btn-primary">Pasan Sekarang</a></div></div></div>';
			}
		});

		$('#daftar-menu').html(content);
			
	});

});