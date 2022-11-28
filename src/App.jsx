import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component'

const tablaCampeones=[

  {id:1, año:"2000",campeon:"Real Madrid CF",subcampeon:"Valencia CF"},
  {id:2, año:"2001",campeon:"FC Bayern Munich",subcampeon:"Valencia CF"},
  {id:3, año:"2002",campeon:"Real Madrid CF",subcampeon:"Bayer 04 Leverkusen"},
  {id:4, año:"2003",campeon:"Milan AC",subcampeon:"Juventus FC"},
  {id:5, año:"2004",campeon:"FC Porto",subcampeon:"AS Monaco"},
  {id:6, año:"2005",campeon:"Liverpool FC",subcampeon:"AC Milan"},
  {id:7, año:"2006",campeon:"FC Barcelona",subcampeon:"Arsenal FC"},
  {id:8, año:"2007",campeon:"Milan AC",subcampeon:"Liverpool FC"},
  {id:9, año:"2008",campeon:"Manchester United FC",subcampeon:"Chelsea CF"},
  {id:10, año:"2009",campeon:"FC Barcelona",subcampeon:"Manchester United FC"},
  {id:11, año:"2010",campeon:"FC Internazionale",subcampeon:"FC Bayern Munich"},
  {id:12, año:"2011",campeon:"FC Barcelona",subcampeon:"Manchester United"},
  {id:13, año:"2012",campeon:"Chelsea FC",subcampeon:"FC Bayern Munich"},
  {id:14, año:"2013",campeon:"FC Bayern Munich",subcampeon:"BV Borussia Dortmund"},
  {id:15, año:"2014",campeon:"Real Madrid CF",subcampeon:"Atletico de Madrid"},
  {id:16, año:"2015",campeon:"FC Barcelona",subcampeon:"Juventus FC"},
  {id:17, año:"2016",campeon:"Real Madrid CF",subcampeon:"Atletico de Madrid"},
  {id:18, año:"2017",campeon:"Real Madrid CF",subcampeon:"Juventus FC"},
  {id:19, año:"2018",campeon:"Real Madrid CF",subcampeon:"Liverpool FC"},
  {id:20, año:"2019",campeon:"Liverpool FC",subcampeon:"Tottenham Hotspur FC"},
];

const columnas=[
  {
    name:'ID',
    selector:'id',
    sortable:true
  },
  {
    name:'Año',
    selector:'año',
    sortable:true
  },
  {
    name:'Campeon',
    selector:'campeon',
    sortable:true,
    grow:3
  },
  {
    name:'Subcampeon',
    selector:'subcampeon',
    sortable:true,
    right:true
  },
]

const paginacionOpciones={
  rowsPerPageText:'Filas por Página',
  rangeSeparatorText:'de',
  selectAllRowsItem:true,
  selectAllRowsItemText:'Todos'
}


function App() {

  return (
    <div className='table-responsive'>
    <DataTable
    style={{
      backgroundColor:'blue'
    }}
    columns={columnas}
    data={tablaCampeones}
    title="Campeones UCL 2000-2019"
    pagination
    paginationComponentOptions={paginacionOpciones}
    fixedHeader
    fixedHeaderScrollHeight='600px'/>
    </div>
    
  )
}

export default App
