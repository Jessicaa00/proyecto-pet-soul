/**
 * PetSoul API Client
 * Cliente JavaScript vanilla para consumir la API REST de PetSoul
 * 
 * ============================================================
 * ESTRUCTURA DE LA API
 * ============================================================
 * 
 * BASE URL: http://localhost:8080
 * 
 * RECURSOS Y ENDPOINTS:
 * 
 * 1. AUTENTICACIÓN (/api/auth)
 *    - POST   /api/auth/login              - Login de usuario
 *    - POST   /api/auth/register           - Registro de usuario
 *    - POST   /api/auth/registerAdmin      - Registro de administrador
 * 
 * 2. USUARIOS (/api/usuarios)
 *    - GET    /api/usuarios/me             - Obtener usuario actual
 *    - PUT    /api/usuarios/me             - Actualizar usuario actual
 *    - DELETE /api/usuarios/me             - Eliminar usuario actual
 * 
 * 3. MASCOTAS (/api/mascotas)
 *    - GET    /api/mascotas                - Listar mascotas (paginado, filtros: estado, institucionId)
 *    - GET    /api/mascotas/{id}           - Obtener mascota por ID
 *    - POST   /api/mascotas                - Crear mascota
 *    - PUT    /api/mascotas/{id}           - Actualizar mascota
 *    - DELETE /api/mascotas/{id}           - Eliminar mascota
 * 
 * 4. INSTITUCIONES (/api/institucion)
 *    - POST   /api/institucion/registrarinstitucion    - Crear institución
 *    - GET    /api/institucion/listarInstitucion       - Listar todas las instituciones
 *    - GET    /api/institucion/obtenerInstitucion/{id} - Obtener institución por ID
 *    - PUT    /api/institucion/actualizar/{id}         - Actualizar institución
 *    - DELETE /api/institucion/eliminar/{id}           - Eliminar institución
 * 
 * 5. PRODUCTOS Y SERVICIOS (/api/productos-servicios)
 *    - GET    /api/productos-servicios     - Listar productos/servicios (paginado, filtros: tipo, estado)
 *    - GET    /api/productos-servicios/{id} - Obtener producto/servicio por ID
 *    - POST   /api/productos-servicios     - Crear producto/servicio
 *    - PUT    /api/productos-servicios/{id} - Actualizar producto/servicio
 *    - DELETE /api/productos-servicios/{id} - Eliminar producto/servicio
 * 
 * 6. ADOPCIONES (/api/adopcion)
 *    - POST   /api/adopcion/solicitud      - Solicitar adopción
 *    - PATCH  /api/adopcion/{id}/aprobar   - Aprobar adopción
 *    - PATCH  /api/adopcion/{id}/rechazar  - Rechazar adopción (requiere motivo)
 *    - PATCH  /api/adopcion/{id}/finalizar - Finalizar adopción
 *    - GET    /api/adopcion                - Buscar adopciones (filtros: estado, institucion, usuario, fechas)
 * 
 * 7. DASHBOARD (/api/dashboard)
 *    - GET    /api/dashboard/estadisticas  - Obtener estadísticas generales
 *    - GET    /api/dashboard/historial     - Obtener historial (param: limite, default=5)
 * 
 * ============================================================
 * ENUMS Y TIPOS
 * ============================================================
 * 
 * EstadoMascota: DISPONIBLE, ADOPTADO, EN_PROCESO, etc.
 * EstadoCatalogo: ACTIVO, INACTIVO, etc.
 * TipoCatalogo: PRODUCTO, SERVICIO
 * EstadoAdopcion: PENDIENTE, APROBADO, RECHAZADO, FINALIZADO
 * 
 * ============================================================
 * AUTENTICACIÓN
 * ============================================================
 * 
 * La API utiliza JWT (JSON Web Tokens) para autenticación.
 * El token se debe incluir en el header: Authorization: Bearer {token}
 * 
 * ============================================================
 */

class PetSoulAPI {
  constructor(baseURL = 'http://localhost:8080') {
    this.baseURL = baseURL;
    this.token = null;
  }

  /**
   * Configura el token de autenticación
   */
  setToken(token) {
    this.token = token;
  }

  /**
   * Elimina el token de autenticación
   */
  clearToken() {
    this.token = null;
  }

  /**
   * Realiza una petición HTTP
   */
  async request(endpoint, options = {}) {
    const url = ${this.baseURL}${endpoint};
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = Bearer ${this.token};
    }

    const config = {
      ...options,
      headers,
    };

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);

      if (response.status === 204) {
        return null;
      }

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw {
          status: response.status,
          message: data?.message || response.statusText,
          data,
        };
      }

      return data;
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw {
        status: 0,
        message: 'Error de conexión con el servidor',
        error,
      };
    }
  }

  // ==================== AUTH ====================

  /**
   * Login de usuario
   */
  async login(email, password) {
    const response = await this.request('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    if (response?.token) {
      this.setToken(response.token);
    }
    return response;
  }

  /**
   * Registro de usuario
   */
  async register(userData) {
    return await this.request('/api/auth/register', {
      method: 'POST',
      body: userData,
    });
  }

  /**
   * Registro de administrador
   */
  async registerAdmin(userData) {
    return await this.request('/api/auth/registerAdmin', {
      method: 'POST',
      body: userData,
    });
  }

  // ==================== USUARIOS ====================

  /**
   * Obtener usuario actual
   */
  async getCurrentUser() {
    return await this.request('/api/usuarios/me', {
      method: 'GET',
    });
  }

  /**
   * Actualizar usuario actual
   */
  async updateCurrentUser(userData) {
    return await this.request('/api/usuarios/me', {
      method: 'PUT',
      body: userData,
    });
  }

  /**
   * Eliminar usuario actual
   */
  async deleteCurrentUser() {
    return await this.request('/api/usuarios/me', {
      method: 'DELETE',
    });
  }

  // ==================== MASCOTAS ====================

  /**
   * Listar mascotas con filtros y paginación
   */
  async listarMascotas({ estado, institucionId, page = 0, size = 20 } = {}) {
    const params = new URLSearchParams();
    if (estado) params.append('estado', estado);
    if (institucionId) params.append('institucionId', institucionId);
    params.append('page', page);
    params.append('size', size);

    return await this.request(/api/mascotas?${params.toString()}, {
      method: 'GET',
    });
  }

  /**
   * Obtener una mascota por ID
   */
  async obtenerMascota(id) {
    return await this.request(/api/mascotas/${id}, {
      method: 'GET',
    });
  }

  /**
   * Crear una nueva mascota
   */
  async crearMascota(mascotaData) {
    return await this.request('/api/mascotas', {
      method: 'POST',
      body: mascotaData,
    });
  }

  /**
   * Actualizar una mascota
   */
  async actualizarMascota(id, mascotaData) {
    return await this.request(/api/mascotas/${id}, {
      method: 'PUT',
      body: mascotaData,
    });
  }

  /**
   * Eliminar una mascota
   */
  async eliminarMascota(id) {
    return await this.request(/api/mascotas/${id}, {
      method: 'DELETE',
    });
  }

  // ==================== INSTITUCIONES ====================

  /**
   * Crear una institución
   */
  async crearInstitucion(institucionData) {
    return await this.request('/api/institucion/registrarinstitucion', {
      method: 'POST',
      body: institucionData,
    });
  }

  /**
   * Listar todas las instituciones
   */
  async listarInstituciones() {
    return await this.request('/api/institucion/listarInstitucion', {
      method: 'GET',
    });
  }

  /**
   * Obtener una institución por ID
   */
  async obtenerInstitucion(id) {
    return await this.request(/api/institucion/obtenerInstitucion/${id}, {
      method: 'GET',
    });
  }

  /**
   * Actualizar una institución
   */
  async actualizarInstitucion(id, institucionData) {
    return await this.request(/api/institucion/actualizar/${id}, {
      method: 'PUT',
      body: institucionData,
    });
  }

  /**
   * Eliminar una institución
   */
  async eliminarInstitucion(id) {
    return await this.request(/api/institucion/eliminar/${id}, {
      method: 'DELETE',
    });
  }

  // ==================== PRODUCTOS Y SERVICIOS ====================

  /**
   * Listar productos/servicios con filtros y paginación
   */
  async listarProductosServicios({ tipo, estado, page = 0, size = 20 } = {}) {
    const params = new URLSearchParams();
    if (tipo) params.append('tipo', tipo);
    if (estado) params.append('estado', estado);
    params.append('page', page);
    params.append('size', size);

    return await this.request(/api/productos-servicios?${params.toString()}, {
      method: 'GET',
    });
  }

  /**
   * Obtener un producto/servicio por ID
   */
  async obtenerProductoServicio(id) {
    return await this.request(/api/productos-servicios/${id}, {
      method: 'GET',
    });
  }

  /**
   * Crear un producto/servicio
   */
  async crearProductoServicio(productoData) {
    return await this.request('/api/productos-servicios', {
      method: 'POST',
      body: productoData,
    });
  }

  /**
   * Actualizar un producto/servicio
   */
  async actualizarProductoServicio(id, productoData) {
    return await this.request(/api/productos-servicios/${id}, {
      method: 'PUT',
      body: productoData,
    });
  }

  /**
   * Eliminar un producto/servicio
   */
  async eliminarProductoServicio(id) {
    return await this.request(/api/productos-servicios/${id}, {
      method: 'DELETE',
    });
  }

  // ==================== ADOPCIONES ====================

  /**
   * Solicitar adopción
   */
  async solicitarAdopcion(idUsuario, idMascota) {
    return await this.request('/api/adopcion/solicitud', {
      method: 'POST',
      body: { idUsuario, idMascota },
    });
  }

  /**
   * Aprobar adopción
   */
  async aprobarAdopcion(id) {
    return await this.request(/api/adopcion/${id}/aprobar, {
      method: 'PATCH',
    });
  }

  /**
   * Rechazar adopción
   */
  async rechazarAdopcion(id, motivo) {
    return await this.request(/api/adopcion/${id}/rechazar, {
      method: 'PATCH',
      body: { motivo },
    });
  }

  /**
   * Finalizar adopción
   */
  async finalizarAdopcion(id) {
    return await this.request(/api/adopcion/${id}/finalizar, {
      method: 'PATCH',
    });
  }

  /**
   * Buscar adopciones con filtros
   */
  async buscarAdopciones({ estado, institucion, usuario, fechaInicio, fechaFin } = {}) {
    const params = new URLSearchParams();
    if (estado) params.append('estado', estado);
    if (institucion) params.append('institucion', institucion);
    if (usuario) params.append('usuario', usuario);
    if (fechaInicio) params.append('fechaInicio', fechaInicio);
    if (fechaFin) params.append('fechaFin', fechaFin);

    const query = params.toString();
    const endpoint = query ? /api/adopcion?${query} : '/api/adopcion';
    
    return await this.request(endpoint, {
      method: 'GET',
    });
  }

  // ==================== DASHBOARD ====================

  /**
   * Obtener estadísticas del dashboard
   */
  async obtenerEstadisticas() {
    return await this.request('/api/dashboard/estadisticas', {
      method: 'GET',
    });
  }

  /**
   * Obtener historial del dashboard
   */
  async obtenerHistorial(limite = 5) {
    return await this.request(/api/dashboard/historial?limite=${limite}, {
      method: 'GET',
    });
  }
}

// Exportar para uso en módulos ES6
// export default PetSoulAPI;

// Para uso en navegador (global)
if (typeof window !== 'undefined') {
  window.PetSoulAPI = PetSoulAPI;
}