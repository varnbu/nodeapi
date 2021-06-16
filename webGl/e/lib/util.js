function getScriptContentById(id){
    const text = document.getElementById(id)
    return text.innerHTML

}

function initShaders(gl,vshader,fshader){
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertexShader,vshader)
    gl.compileShader(vertexShader)

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragmentShader,fshader)
    gl.compileShader(fragmentShader)


    let program = gl.createProgram()

    gl.attachShader(program,vertexShader)
    gl.attachShader(program,fragmentShader)

    gl.linkProgram(program)
    gl.useProgram(program)
    gl.program = program;
    return true
}




