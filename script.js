// 1. Función Constructora Consultorio
function Consultorio(cNombre, cPaciente) {
    let _nombreConsultorio = cNombre;
    let _listaDePacientes = cPaciente;

// Getters Consultorio
Object.defineProperty(this, '_getListaDePacientes', { 
    get: function () {   
        return _listaDePacientes
    }
});
// Setters Consultorio
Object.defineProperty(this, '_setListaDePacientes', { 
    set: function (listaDePacientes) {  
        _listaDePacientes = listaDePacientes 
    }
});
};

// 2. Función Constructora Pacientes
function Pacientes(pNombre, pEdad, pRut, pDiagnostico){ 
    let _nombre = pNombre;
    let _edad = pEdad;
    let _rut = pRut;
    let _diagnostico = pDiagnostico;

// Getters Pacientes
    Object.defineProperty(this, '_getDatosUsuario', { 
        get: function () {   
            return [_nombre, _edad, _rut, _diagnostico];
        }
    });

// Setters Pacientes
    Object.defineProperty(this, '_setNombre', { 
        set: function (nombre) {  
            _nombre = nombre;
        }
    });
}

//3. Prototipo de la función constructora
Consultorio.prototype.getListaDePacientes = function(){
    return this._getListaDePacientes;
}

// 3. Creación de las instancias
let p1 = new Pacientes('Cristián', 50, '10.111.111-0', 'Fractura');
let p2 = new Pacientes('Alejandro', 48, '12.222.222-2', 'Resfrío');
let p3 = new Pacientes('Cristóbal', 44, '13.333.333-3', 'Intoxicación');
let p4 = new Pacientes('Rodrigo', 42, '14.444.444-4', 'Tos');
let p5 = new Pacientes('Rosario', 37, '15.555.555-5', 'Embarazo');

let miConsultorio = new Consultorio('Nueva Vida Consultorio', 
    [
        p1._getDatosUsuario, 
        p2._getDatosUsuario, 
        p3._getDatosUsuario, 
        p4._getDatosUsuario, 
        p5._getDatosUsuario
    ]
    );

// 4. Obtener data por medio del método creado
console.log(miConsultorio._getListaDePacientes)
