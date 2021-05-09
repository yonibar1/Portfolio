export default {
    getProjects,
    getProjectById,
}
const gProjects = [
    {
        id: _makeId(),
        title: 'GeTour',
        createdAt: '17/03/2021',
        link: 'https://getour.herokuapp.com/#/',
        description: 'GeTour is a Market Place where anyone can book a tour or guide one, My final project as a student written with the latest technologies such as Vue.js,Vuex,Scss,Node.js,Express,Socket.io And MongoDB.',
        imgURL: 'https://res.cloudinary.com/yonibar/image/upload/v1620034753/Screen_Shot_2021-05-03_at_12.25.05_zpcsbk.png'
    }
    ,
    {
        id: _makeId(),
        title: 'MrBitcoin',
        createdAt: '04/04/2021',
        link: 'https://mrbitcoinapp.herokuapp.com/#/',
        description: 'MrBitcoin is an app where you can manage your own digital wallet. written with the latest technologies such as React.js,Redux,Scss,Node.js,Express And MongoDB.',
        imgURL: 'https://res.cloudinary.com/yonibar/image/upload/v1620034780/Screen_Shot_2021-05-03_at_12.37.01_mk0my2.png'
    }
    ,
    {
        id: _makeId(),
        title: 'Appsus',
        createdAt: '25/02/2021',
        link: 'https://arigabay.github.io/AppSus/#/',
        description: 'AppSus is An amazing app to manage your tasks and contact Co-workers. inspired by Gmail & Google Keep. My first Vue.js project. written with: Vue.js,Scss',
        imgURL: 'https://res.cloudinary.com/yonibar/image/upload/v1620034710/Screen_Shot_2021-05-03_at_12.20.53_tl7hlz.png'
    }
]

async function getProjects() {
    return gProjects
}

async function getProjectById(id) {
    const project = gProjects.find(p => p.id === id)
    return project
}
function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

