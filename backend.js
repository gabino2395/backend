class Usuario{
  constructor(nombre,apellido,libros,mascotas){
    this.nombre=nombre;
    this.apellido=apellido;
    this.libros=libros;
    this.mascotas=mascotas;
  }
  getFullName(){
    return `${this.nombre}+${this.apellido}`
  }
    addMascotas(mascota) {
      this.mascotas.push(mascota);
  }
  addMascota(mascota){
    this.mascotas.push(mascota);
  }
  
  countMascotas(){
    return this.mascotas.length
  }
  addBook(nombre,autor){
    this.libros.push({nombre,autor})
    
  }
  getBookNames(){
    return this.libros.map(libro => libro.nombre)
  }
}
const usuario=new Usuario('gabino','mendez',[{nombre:'mujeres',autor:'Charles Bukowski'}],["Clifford","snoopy"])
console.log('retorna el nombre completo: '+usuario.getFullName ())
usuario.addMascota('billy')

console.log('retorna la cantidad de mascotas: '+usuario.countMascotas())
usuario.addBook(  'Paris era una fiesta','Hemingway');
usuario.getBookNames()
console.log(usuario)