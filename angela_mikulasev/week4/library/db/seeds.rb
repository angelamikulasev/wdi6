Author.destroy_all
Novel.destroy_all

author = Author.create!(name: 'Harper Lee', nationality: 'American', dob: '1893/04/20', image: 'http://rha.chookdigital.net/authors/lee,%20harper.jpg')

Novel.create!(title: 'To Kill A mockingbird', year: '1960', genre:'fiction', image: 'http://ecx.images-amazon.com/images/I/51grMGCKivL._SY344_BO1,204,203,200_.jpg', author_id: author.id)
