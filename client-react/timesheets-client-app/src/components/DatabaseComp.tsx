const dbStructure = [
    ["ID", 10],
    ["Name", 50],
    ["Age", 30],
    ["Color", 10],
]

const dbData ={
    [1]: ["John", "Anderson", 25, 'blue'],
    [2]: ["Jane", "Doe", 30],
    [3]: ["James", "Smith", 35],
    [4]: ["Jill", "Johnson", 40],
    [5]: ["Jack", "Brown", 45],
    [6]: ["Jenny", "White", 50],
    [7]: ["Jake", "Black", 55],
    [8]: ["Judy", "Green", 60],
    [9]: ["Jesse", "Blue", 65],
    [10]: ["Jasmine", "Red", 70],
    [11]: ["Jerry", "Orange", 75],
    [12]: ["Jill", "Yellow", 80],
    [13]: ["Jill", "Purple", 85],
    [14]: ["Jill", "Pink", 90],
    [15]: ["Jill", "Brown", 95],
    [16]: ["Jill", "White", 100],
    [17]: ["Jill", "Black", 105],
    [18]: ["Jill", "Green", 110],
    [19]: ["Jill", "Blue", 115],
    [20]: ["Jill", "Red", 120],
    [21]: ["Jill", "Orange", 125],
    [22]: ["Jill", "Yellow", 130],
    [23]: ["Jill", "Purple", 135],
    [24]: ["Jill", "Pink", 140],
    [25]: ["Jill", "Brown", 145],
    [26]: ["Jill", "White", 150],
    [27]: ["Jill", "Black", 155],
    [28]: ["Jill", "Green", 160],
    [29]: ["Jill", "Blue", 165],
    [30]: ["Jill", "Red", 170],
    [31]: ["Jill", "Orange", 175],
    [32]: ["Jill", "Yellow", 180],
    [33]: ["Jill", "Purple", 185],
    [34]: ["Jill", "Pink", 190],
    [35]: ["Jill", "Brown", 195],
    [36]: ["Jill", "White", 200],
    [37]: ["Jill", "Black", 205],
    [38]: ["Jill", "Green", 210],
    [39]: ["Jill", "Blue", 215],
    [40]: ["Jill", "Red", 220],
    [41]: ["Jill", "Orange", 225],
    [42]: ["Jill", "Yellow", 230],
    [43]: ["Jill", "Purple", 235],
    [44]: ["Jill", "Pink", 240],
    [45]: ["Jill", "Brown", 245],
    [46]: ["Jill", "White", 250],
    [47]: ["Jill", "Black", 255],
    [48]: ["Jill", "Green", 260],
    [49]: ["Jill", "Blue", 265],
    [50]: ["Jill", "Red", 270],
    [51]: ["Jill", "Orange", 275],
    [52]: ["Jill", "Yellow", 280],
    [53]: ["Jill", "Purple", 285],
    [54]: ["Jill", "Pink", 290],
    [55]: ["Jill", "Brown", 295],
    [56]: ["Jill", "White", 300],
    [57]: ["Jill", "Black", 305],
    [58]: ["Jill", "Green", 310],
    [59]: ["Jill", "Blue", 315],
    [60]: ["Jill", "Red", 320],
    [61]: ["Jill", "Orange", 325],
    [62]: ["Jill", "Yellow", 330],
    [63]: ["Jill", "Purple", 335],
    [64]: ["Jill", "Pink", 340],
    [65]: ["Jill", "Brown", 345],
    [66]: ["Jill", "White", 350],
    [67]: ["Jill", "Black", 355],
    [68]: ["Jill", "Green", 360],
    [69]: ["Jill", "Blue", 365],
    [70]: ["Jill", "Red", 370],
    [71]: ["Jill", "Orange", 375],
    [72]: ["Jill", "Yellow", 380],
    [73]: ["Jill", "Purple", 385],
}

interface DataBaseRowProps{
    id: number
    data: any;
}

interface DataBaseIndexRowProps{
    data: any;
}

function DatabaseRowComp({id, data}: DataBaseRowProps){
    return(
        <div className="DatabaseRowComp">
            {dbStructure.map((column, index) => 
            <div style={{width: `${column[1]}%`}}>
                <h3>{data[index]}</h3>
            </div>
            )}
        </div>
    )
}

function DatabaseIndexRowComp({data}: DataBaseIndexRowProps){
    return(
        <div className="DatabaseRowComp">
            {dbStructure.map((column) => 
            <div style={{width: `${column[1]}%`}}>
                <h3>{column[0]}</h3>
            </div>
            )}
        </div>
    )
}

function DatabaseComp(){
    console.log(dbData[1]);
    return(
        <div className="DatabaseComp">
            {/* Database Header */}
            <div className="DatabaseHeader">
                <div className="DatabaseTitleElement">
                    <h1>Database Title</h1>
                </div>
                <div className="DatabaseTitleElement">
                    <h3>Search</h3>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="DatabaseBody">
                <div className="DatabaseBodyIndexElement">
                    <DatabaseIndexRowComp data={dbStructure}/>
                </div>
                <div className="DatabaseResultsBody">
                    {Object.entries(dbData).map(([id, data]) => <DatabaseRowComp id={Number(id[0])} key={id[0]} data={data}/>)}
                </div>
            </div>
        </div>
    )
}

export default DatabaseComp;