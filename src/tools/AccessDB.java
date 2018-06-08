package tools;

import lager.Product;
import lager.ProductGroup;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class AccessDB {

    private Connection connect = null;
    private Statement statement = null;
    private PreparedStatement preparedStatement = null;
    private ResultSet resultSet = null;



    public void
    /*

    public List<Product> readSelectedSqlColumn()throws Exception{

        //Class.forName("com.mysql.jdbc.Driver");
        connect = DriverManager
                .getConnection( login);

        statement = connect.createStatement();

        resultSet = statement
                .executeQuery("SELECT * FROM selga;");
        //resultSet.next();

        List<Product> productList = new ArrayList<>();
        while(resultSet.next()){

            productList.add(new Product(resultSet.getInt("Artikelnummer"),
                    resultSet.getString("Benämning"),
                    resultSet.getString("Enhet"),
                    resultSet.getString("Materialgrupp"),
                    resultSet.getString("GN-pris")));
            //  System.out.println("Table: " + resultSet.getString(i));
        }

        return productList;

    }

    */


    public void readDataBase(Product product) throws Exception {
        try {
            // This will load the MySQL driver, each DB has its own driver
            Class.forName("com.mysql.jdbc.Driver");
            // Setup the connection with the DB
            connect = DriverManager
                    .getConnection( login);

            // Statements allow to issue SQL queries to the database
            statement = connect.createStatement();
            // Result set get the result of the SQL query
            resultSet = statement
                    .executeQuery("SELECT * FROM bank.product;");

            // PreparedStatements can use variables and are more efficient
            preparedStatement = connect
                    .prepareStatement("insert into bank.product values (default,  ?, ?, ?, ?, ?)");
            // "myuser, webpage, datum, summary, COMMENTS from feedback.comments");
            // Parameters start with 1
            preparedStatement.setString(1, product.getProductName());
            //preparedStatement.setInt(2, å);
            //preparedStatement.setDouble(3, buyValue);
            //preparedStatement.setDouble(4, sellValue);
            //preparedStatement.setString(5, articleNumber);
            //preparedStatement.executeUpdate();
            resultSet = statement
                    .executeQuery("SELECT * FROM product");



            writeMetaData(resultSet);
        } catch (Exception e) {
            throw e;
        } finally {
            close();
        }

    }

    private void writeMetaData(ResultSet resultSet) throws SQLException {
        //  Now get some metadata from the database
        // Result set get the result of the SQL query

        System.out.println("The columns in the table are: ");
        resultSet.next();

        System.out.println("Table: " + resultSet.getString(1));

        for  (int i = 1; i<= resultSet.getMetaData().getColumnCount(); i++){
            System.out.println("Column " +i  + " "+ resultSet.getMetaData().getColumnName(i));
        }
    }


    // You need to close the resultSet
    private void close() {
        try {
            if (resultSet != null) {
                resultSet.close();
            }

            if (statement != null) {
                statement.close();
            }

            if (connect != null) {
                connect.close();
            }
        } catch (Exception e) {

        }
    }

}