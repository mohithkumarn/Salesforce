List<Contact> conList= [Select Name,Department from Contact];
Contact con= new Contact()
System.debug(conList);
con.LastName= 'Zoro';
insert(con);