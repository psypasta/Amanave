import java.sql.*;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.Executor;

public class Main {

    private String userName = "imsproto";
    private String password = "placeholder";
    private String dbms = "mysql";
    private String serverName = "localhost";
    private String portNumber = "3306";
    private static String dbName = "dbProto";

    public static void main(String[] args) {

        Employee e = new Employee("Max", "Gatan");
        Inventory i = new Inventory();
        Order o = new Order();
        Product p = new Product();
        System.out.println("Hello World!");

        Main n = new Main();
        Connection con = null;
        try{
            con = n.getConnection();
            viewTable(con, dbName);
        }
        catch(SQLException err){
            err.printStackTrace();
        }

    }

    public Connection getConnection() throws SQLException {

        Connection conn = null;
        Properties connectionProps = new Properties();
        connectionProps.put("user", this.userName);
        connectionProps.put("password", this.password);

        if (this.dbms.equals("mysql")) {
            conn = DriverManager.getConnection(
                    "jdbc:" + this.dbms + "://" +
                            this.serverName +
                            ":" + this.portNumber + "/" + "?useUnicode=true" +
                                                        "&useJDBCCompliantTimezoneShift=true" +
                                                        "&useLegacyDatetimeCode=false&serverTimezone=UTC",
                    connectionProps);
        } else if (this.dbms.equals("derby")) {
            conn = DriverManager.getConnection(
                    "jdbc:" + this.dbms + ":" +
                            this.dbName +
                            ";create=true",
                    connectionProps);
        }
        System.out.println("Connected to database");
        return conn;
    }

    public static void viewTable(Connection con, String dbName)
            throws SQLException {

        Statement stmt = null;
        String query = "select COF_NAME, SUP_ID, PRICE, " +
                "SALES, TOTAL " +
                "from " + dbName + ".COFFEES";
        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String coffeeName = rs.getString("COF_NAME");
                int supplierID = rs.getInt("SUP_ID");
                float price = rs.getFloat("PRICE");
                int sales = rs.getInt("SALES");
                int total = rs.getInt("TOTAL");
                System.out.println(coffeeName + "\t" + supplierID +
                        "\t" + price + "\t" + sales +
                        "\t" + total);
            }
        } catch (SQLException e ) {
            e.printStackTrace();
        } finally {
            if (stmt != null) { stmt.close(); }
        }
    }

}
