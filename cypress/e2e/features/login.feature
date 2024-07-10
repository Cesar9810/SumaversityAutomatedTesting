Feature: Inicio de sesión
  Como usuario registrado
  Quiero iniciar sesión en Sumaversity
  Para acceder a mis cursos 

  Scenario: Inicio de sesión exitoso con credenciales válidas
    Given estoy en la página de inicio de sesión
    When ingreso mi correo y mi contraseña
    And hago clic en el botón de iniciar sesión
    Then debo ver la página de inicio de Suma
    
